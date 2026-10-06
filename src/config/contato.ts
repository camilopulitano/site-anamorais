import { rota, type Idioma } from '../i18n/idiomas';
import { t } from '../i18n/ui';

/**
 * Contato da Ana — um lugar só.
 *
 * O número é validado no build: se alguém trocar por um formato errado,
 * o build quebra em vez de publicar um link de WhatsApp que não abre.
 */
const WHATSAPP_BRUTO = '5545998593078';

function validarE164(numero: string): string {
  // 55 + DDD (2 dígitos) + 9 + 8 dígitos
  if (!/^55\d{2}9\d{8}$/.test(numero)) {
    throw new Error(
      `[contato] WHATSAPP inválido: "${numero}". ` +
        'Use só dígitos no formato 55 + DDD + 9 + número (ex.: 5545998593078).',
    );
  }
  return numero;
}

export const WHATSAPP_E164 = validarE164(WHATSAPP_BRUTO);

/** Número formatado para leitura humana: (45) 99859-3078 */
export const WHATSAPP_LEGIVEL = `(${WHATSAPP_E164.slice(2, 4)}) ${WHATSAPP_E164.slice(4, 9)}-${WHATSAPP_E164.slice(9)}`;

export const INSTAGRAM_USUARIO = 'ana.quintanas';
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_USUARIO}/`;

export function linkWhatsApp(mensagem?: string): string {
  const base = `https://wa.me/${WHATSAPP_E164}`;
  return mensagem ? `${base}?text=${encodeURIComponent(mensagem)}` : base;
}

/**
 * Link de WhatsApp sobre uma obra específica — usado no botão "Consultar
 * valor". A mensagem sai no idioma de quem está no site, já pergunta o
 * valor e leva o link da ficha, para a Ana saber exatamente de qual
 * pintura se trata.
 */
export function linkObra(
  obra: { slug: string; titulo: string; situacao: 'disponivel' | 'vendida' },
  lang: Idioma = 'pt',
): string {
  const T = t(lang);
  const ficha = new URL(rota(lang, `/obras/${obra.slug}`), import.meta.env.SITE).toString();
  const pedido = obra.situacao === 'disponivel' ? T.whatsapp.disponivel(obra.titulo) : T.whatsapp.vendida(obra.titulo);
  return linkWhatsApp(`${pedido}\n${ficha}`);
}
