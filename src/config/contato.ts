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

export function linkObra(titulo: string): string {
  return linkWhatsApp(`Olá, Ana! Vi a obra "${titulo}" no seu site e gostaria de saber mais sobre ela.`);
}
