/**
 * Idiomas do site. Português é o principal e fica na raiz (/, /obras…);
 * os outros ganham um prefixo (/en, /en/obras…).
 */
export const IDIOMAS = ['pt', 'en', 'es', 'fr', 'it', 'zh'] as const;
export type Idioma = (typeof IDIOMAS)[number];

export const PADRAO: Idioma = 'pt';
export const OUTROS = IDIOMAS.filter((l) => l !== PADRAO) as Exclude<Idioma, 'pt'>[];

export const INFO: Record<Idioma, { nome: string; curto: string; html: string; og: string }> = {
  pt: { nome: 'Português', curto: 'PT', html: 'pt-BR', og: 'pt_BR' },
  en: { nome: 'English', curto: 'EN', html: 'en', og: 'en_US' },
  es: { nome: 'Español', curto: 'ES', html: 'es', og: 'es_ES' },
  fr: { nome: 'Français', curto: 'FR', html: 'fr', og: 'fr_FR' },
  it: { nome: 'Italiano', curto: 'IT', html: 'it', og: 'it_IT' },
  zh: { nome: '中文', curto: '中文', html: 'zh-Hans', og: 'zh_CN' },
};

/** Endereço de uma página no idioma: rota('en', '/obras') → '/en/obras'. */
export function rota(lang: Idioma, caminho = '/'): string {
  if (lang === PADRAO) return caminho;
  return caminho === '/' ? `/${lang}` : `/${lang}${caminho}`;
}

/** Tira o prefixo de idioma de um caminho: '/en/obras' → '/obras'. */
export function semIdioma(pathname: string): string {
  const limpo = pathname.replace(/\/+$/, '') || '/';
  for (const l of OUTROS) {
    if (limpo === `/${l}`) return '/';
    if (limpo.startsWith(`/${l}/`)) return limpo.slice(l.length + 1);
  }
  return limpo;
}

/** getStaticPaths das páginas com prefixo de idioma. */
export function caminhosDeIdioma() {
  return OUTROS.map((lang) => ({ params: { lang }, props: { lang } }));
}

/** Idioma da página atual, pelo endereço: /en/obras → 'en'; /obras → 'pt'. */
export function idiomaDe(url: URL): Idioma {
  const primeiro = url.pathname.split('/')[1] ?? '';
  return (OUTROS as string[]).includes(primeiro) ? (primeiro as Idioma) : PADRAO;
}
