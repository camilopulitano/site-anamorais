# Plano: venda com API do Mercado Pago + frete por CEP (hoje, 17/11/2026)

Lançamento da Ana: 18/11/2026. Branch: `feat/venda-link-mercado-pago` (PR #4).
Leia também `claude/AGENTS.md` (regras de segurança) no projeto do claude.ai.

## Decisões
- Só as obras do lançamento têm preço e Comprar. As 10 antigas seguem com "Consultar valor".
- Conta Mercado Pago: da Ana.
- Frete pelos Correios, **dinâmico por CEP**, cobrado **junto** com a obra no checkout.
- Fazer a API hoje. Plano B: se às 22h não estiver testado em sandbox, lançar com "Consultar valor" e ligar o Comprar depois (é só um campo por obra).

## Como as peças se ligam
```
Ficha da obra (estática)
  ├─ campo CEP → POST /api/frete      → Melhor Envio (cotação Correios) → opções e valores
  └─ Comprar   → POST /api/checkout   → reserva no Supabase (30 min) → Mercado Pago cria a preferência
                                          item = obra, shipments = { cost: frete, mode: 'not_specified' }
                                          → devolve init_point → navegador vai para o checkout
Mercado Pago → POST /api/webhook-mp   → valida x-signature → consulta o pagamento
                                          approved → vendida no Supabase + aviso para a Ana
                                          rejected/cancelled → libera a reserva
Ficha da obra ao carregar → GET /api/estado?slug= → esconde Comprar se vendida/reservada
```
Frete NUNCA vem do navegador: `/api/checkout` recalcula no servidor com o CEP e o serviço escolhido.

## Etapa 0 — Contas (sem Claude, zero tokens) — Ana e Camilo
1. Mercado Pago (conta da Ana): Suas integrações → criar aplicação Checkout Pro → copiar **Access Token de teste**. Webhooks → URL `https://anaquintanas.com.br/api/webhook-mp`, evento Pagamentos → copiar **chave secreta**. Criar usuários de teste (comprador).
2. Melhor Envio (conta da Ana, grátis): cadastro, endereço de origem (CEP do ateliê), gerar **token** (Área Dev / Integrações, permissão de cálculo de frete). Há sandbox (`sandbox.melhorenvio.com.br`) para testes.
3. **Supabase** (decidido em 17/11, no lugar do Upstash): criar projeto (região São Paulo). Rodar a migração `supabase/migrations/0001_obras_venda.sql` (Etapa 3 cria). Copiar `SUPABASE_URL` e a chave **secret/service_role** (só no servidor).
4. Vercel → Settings → Environment Variables: `MP_ACCESS_TOKEN`, `MP_WEBHOOK_SECRET`, `MELHOR_ENVIO_TOKEN`, `MELHOR_ENVIO_URL`, `CEP_ORIGEM`, `SUPABASE_URL`, `SUPABASE_SECRET_KEY`. Valores **nunca** no chat nem no código.
5. Por obra: preço, **peso embalada** e **caixa (A × L × C cm)** — sem isso não há frete.

## Etapa 1 — Obras novas (Claude Code, Sonnet)
- Copie as fotos para `src/assets/obras/<slug>.jpg` você mesmo (não cole imagem no chat).
- Crie `docs/obras-lancamento.txt` com uma linha por obra: slug, título, tema, técnica, medidas, ano, preço, peso, caixa.
- Peça: "cadastre as obras de docs/obras-lancamento.txt em obras.ts e traduza alt/sobre nos 5 idiomas".

## Etapa 2 — Servidor + frete
- `npx astro add vercel` (site continua estático; só rotas com `export const prerender = false` viram funções).
- `src/server/integrations/melhorEnvio.ts` (timeout, erro tratado) e `src/pages/api/frete.ts` (Zod: slug + CEP 8 dígitos; filtra só Correios; rate limit).
- Testar com `curl` antes de qualquer tela.

## Etapa 3 — Checkout
- `src/server/integrations/mercadoPago.ts`, `src/server/estado.ts` (Supabase, só no servidor).
- Migração `supabase/migrations/0001_obras_venda.sql`: tabela `obras_venda` (slug PK, status disponivel/reservada/vendida, reservada_ate, pagamento_id, atualizado_em) + tabela `pagamentos` (id do MP PK, para idempotência). **RLS ligada sem política pública** (só o servidor acessa). Funções SQL atômicas: `reservar_obra(slug, minutos)` = `UPDATE ... SET status='reservada' WHERE slug=$1 AND (status='disponivel' OR (status='reservada' AND reservada_ate < now())) RETURNING`; `marcar_vendida`; `liberar_obra`. Teste provando que a chave anon não lê nem escreve.
- `src/pages/api/checkout.ts`: Zod (slug, CEP, serviço), obra disponível, recalcula frete, reserva, cria preferência com `items`, `shipments`, `external_reference`, `back_urls`, `auto_return`, `notification_url`, expiração 30 min, **boleto excluído**.

## Etapa 4 — Webhook
- `src/pages/api/webhook-mp.ts`: valida assinatura **antes de tudo** (validador do SDK `mercadopago`), consulta o pagamento, idempotente, marca vendida / libera, avisa a Ana (e-mail). Pagamento aprovado de obra já vendida a outra pessoa → registrar para estorno.

## Etapa 5 — Tela
- Ficha: campo CEP + opções de frete + total + Comprar (script com `addEventListener`, sem `onclick`). Estado da obra consultado ao carregar.
- Páginas `/obrigado`, `/pendente`, `/erro` nos 6 idiomas.
- Galeria estática continua com o selo do build; quando vender, trocar `situacao` para `'vendida'` em `obras.ts` no dia seguinte.

## Etapa 6 — Testes e produção
- Sandbox: compra aprovada, recusada, Pix pendente; reserva expirando; webhook marcando vendida.
- Trocar para credenciais de produção, merge do PR, conferir no ar com uma compra real barata.

## Como gastar menos tokens
- Faça o código no **Claude Code, no seu computador, dentro de `C:\Users\camil\site_anamorais`** (`git fetch` + `git checkout feat/venda-link-mercado-pago`). Ele lê os arquivos direto, sem você colar nada.
- **Uma etapa por conversa.** Comece com "leia docs/plano-api-mercado-pago.md e faça a Etapa N". Entre etapas, `/clear`.
- Etapas mecânicas (1 e 5) com **Sonnet**; desenho da reserva e do webhook (3 e 4) com Opus.
- Não cole imagens nem logs inteiros; peça só o fim do log (`| tail`).
- Peça mudanças pequenas e um commit por etapa: se der errado, volta um commit.
- A conversa no claude.ai já está longa; cada mensagem nova relê tudo. Mudar para o Claude Code com este arquivo é a maior economia.
