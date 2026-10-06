/**
 * Portfólio em forma de livro (/portfolio).
 *
 * As mesmas páginas servem às duas saídas:
 *   - a versão online, que vira página (src/views/Livro.astro);
 *   - o PDF para baixar, gerado a partir de /portfolio/imprimir
 *     (src/views/LivroImpressao.astro) com `node scripts/gerar-pdfs.mjs`.
 *
 * Todo o conteúdo vem do site: textos de src/i18n/ui.ts, obras de
 * src/content/obras.ts, legendas dos vídeos de src/content/videos.ts.
 * Quando uma obra entra ou sai do site, o livro acompanha — mas os PDFs
 * precisam ser gerados de novo.
 */
import { statSync } from 'node:fs';
import { join } from 'node:path';
import { obras, obraPorSlug, type Obra } from './obras';
import { videos } from './videos';
import { t } from '../i18n/ui';
import { legendaDoVideo } from '../i18n/obras';
import type { Idioma } from '../i18n/idiomas';

/** Obra da capa. */
export const OBRA_DA_CAPA = 'morro-colorido';

/** Formato da página, em milímetros (livro de arte vertical). */
export const FORMATO = { largura: 210, altura: 270 };

export type PaginaLivro =
  | { tipo: 'capa'; obra: Obra }
  | { tipo: 'foto' }
  | { tipo: 'sobre' }
  | { tipo: 'abertura'; numeral: string; titulo: string; texto?: string }
  | { tipo: 'pensamento'; texto: string }
  | { tipo: 'obra'; obra: Obra }
  | { tipo: 'contracapa' };

/** Tira as aspas que os textos do site já trazem (“…”, «…»). */
function semAspas(texto: string): string {
  return texto.replace(/^[\s“”"«»„]+|[\s“”"«»„]+$/g, '').trim();
}

/** Legenda de um Reels pelo código, no idioma pedido. */
function legenda(codigo: string, lang: Idioma): string | undefined {
  const v = videos.find((x) => x.url.includes(codigo));
  return v ? legendaDoVideo(v.url, v.legenda, lang) : undefined;
}

/** Reflexões da Ana que já estão no site (início, Sobre e vídeos). */
export function pensamentos(lang: Idioma): string[] {
  const T = t(lang);
  const espaco = lang === 'zh' ? '' : ' ';
  return [
    `${T.inicio.frase}${espaco}${T.inicio.fraseDestaque}`,
    semAspas(T.inicio.brasilCitacao),
    T.sobre.paragrafos[4],
    legenda('DdoWAkdzGZg', lang),
    legenda('DTDHINqEw3M', lang),
  ].filter((x): x is string => Boolean(x));
}

/** Todas as páginas do livro, na ordem. O índice de cada uma é o número da página (a capa é a 0). */
export function paginasDoLivro(lang: Idioma): PaginaLivro[] {
  const T = t(lang);
  const lista: PaginaLivro[] = [
    { tipo: 'capa', obra: obraPorSlug(OBRA_DA_CAPA) },
    { tipo: 'foto' },
    { tipo: 'sobre' },
    { tipo: 'abertura', numeral: 'I', titulo: T.livro.pensamentos },
    ...pensamentos(lang).map((texto) => ({ tipo: 'pensamento' as const, texto })),
    { tipo: 'abertura', numeral: 'II', titulo: T.obras.titulo, texto: T.obras.intro },
    ...obras.map((obra) => ({ tipo: 'obra' as const, obra })),
  ];
  // A contracapa precisa cair sozinha no fim: total de páginas par.
  if ((lista.length + 1) % 2 !== 0) lista.push({ tipo: 'abertura', numeral: '', titulo: '' });
  lista.push({ tipo: 'contracapa' });
  return lista;
}

/** Endereço e tamanho do PDF de cada idioma (o tamanho só aparece se o arquivo existir). */
export function pdfDoLivro(lang: Idioma): { href: string; arquivo: string; mb?: string } {
  const arquivo = `ana-quintanas-portfolio-${lang}.pdf`;
  const href = `/portfolio/${arquivo}`;
  try {
    const bytes = statSync(join(process.cwd(), 'public', 'portfolio', arquivo)).size;
    return { href, arquivo, mb: (bytes / 1048576).toLocaleString(lang === 'zh' ? 'zh-CN' : lang, { maximumFractionDigits: 1 }) };
  } catch {
    return { href, arquivo };
  }
}
