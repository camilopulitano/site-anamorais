import { INFO, type Idioma } from '../i18n/idiomas';

/**
 * Venda de obras pelo Mercado Pago (link de pagamento).
 *
 * Cada obra à venda tem um link criado no painel do Mercado Pago da Ana
 * (Link de pagamento, quantidade 1). O botão "Comprar" da ficha abre esse
 * link. Quando a obra é vendida, a Ana ou o Camilo trocam `situacao` para
 * 'vendida' em src/content/obras.ts e desativam o link no painel.
 *
 * O link é validado no build: se alguém colar um endereço que não é do
 * Mercado Pago (ou sem https), o build quebra em vez de publicar um botão
 * que leva para outro lugar.
 */
const SERVIDORES_PERMITIDOS = ['mpago.la', 'mpago.li', 'mercadopago.com.br', 'www.mercadopago.com.br'];

export interface Venda {
  /** Preço em reais, ex.: 650 ou 1250.5. */
  preco: number;
  /** Link de pagamento do Mercado Pago, ex.: https://mpago.la/2AbCdEf */
  link: string;
}

/** Quebra o build se a venda de uma obra estiver mal preenchida. */
export function validarVenda(slug: string, venda: Venda): void {
  if (!Number.isFinite(venda.preco) || venda.preco <= 0) {
    throw new Error(`[venda] preço inválido em "${slug}": ${venda.preco}. Use um número maior que zero, em reais (ex.: 650).`);
  }
  let url: URL;
  try {
    url = new URL(venda.link);
  } catch {
    throw new Error(`[venda] link inválido em "${slug}": "${venda.link}". Cole o link inteiro do Mercado Pago, com https://.`);
  }
  if (url.protocol !== 'https:' || !SERVIDORES_PERMITIDOS.includes(url.hostname)) {
    throw new Error(
      `[venda] o link de "${slug}" não é do Mercado Pago: "${venda.link}". ` +
        `Endereços aceitos: ${SERVIDORES_PERMITIDOS.join(', ')}.`,
    );
  }
}

/** "R$ 650,00" no formato do idioma da página. */
export function formatarPreco(preco: number, lang: Idioma): string {
  return new Intl.NumberFormat(INFO[lang].html, { style: 'currency', currency: 'BRL' }).format(preco);
}
