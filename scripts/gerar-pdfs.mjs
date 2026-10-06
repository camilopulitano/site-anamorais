/**
 * Gera os PDFs do portfólio em livro, um por idioma, em public/portfolio/.
 *
 * Quando rodar: sempre que mudar uma obra, um texto ou uma foto do livro.
 *
 *   npm run build
 *   node scripts/gerar-pdfs.mjs
 *   npm run build        (de novo, para o site mostrar o tamanho novo do PDF)
 *
 * Precisa do Playwright com o Chromium (uma vez só):
 *   npm i -D playwright && npx playwright install chromium
 *
 * As páginas saem de /portfolio/imprimir (e /en/portfolio/imprimir…),
 * que usam exatamente o mesmo HTML das páginas do livro online.
 */
import { createServer } from 'node:http';
import { readFile, stat, mkdir } from 'node:fs/promises';
import { join, extname, resolve } from 'node:path';

const IDIOMAS = ['pt', 'en', 'es', 'fr', 'it', 'zh'];
const RAIZ = resolve('dist');
const SAIDA = resolve('public/portfolio');
const TIPOS = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
};

// Servidor estático mínimo para a pasta dist/.
const servidor = createServer(async (req, res) => {
  let caminho = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  let arquivo = join(RAIZ, caminho);
  try {
    if ((await stat(arquivo)).isDirectory()) arquivo = join(arquivo, 'index.html');
  } catch {
    arquivo = join(RAIZ, caminho, 'index.html');
  }
  try {
    const corpo = await readFile(arquivo);
    res.writeHead(200, { 'content-type': TIPOS[extname(arquivo)] ?? 'application/octet-stream' });
    res.end(corpo);
  } catch {
    res.writeHead(404).end();
  }
});
await new Promise((ok) => servidor.listen(0, '127.0.0.1', ok));
const base = `http://127.0.0.1:${servidor.address().port}`;

const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ?? 'playwright');
const navegador = await chromium.launch(
  process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {},
);
await mkdir(SAIDA, { recursive: true });

for (const lang of IDIOMAS) {
  const pagina = await navegador.newPage();
  const prefixo = lang === 'pt' ? '' : `/${lang}`;
  await pagina.goto(`${base}${prefixo}/portfolio/imprimir`, { waitUntil: 'networkidle' });
  await pagina.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all(
      [...document.images].map((img) =>
        img.complete ? null : new Promise((ok) => img.addEventListener('load', ok, { once: true })),
      ),
    );
  });
  const destino = join(SAIDA, `ana-quintanas-portfolio-${lang}.pdf`);
  await pagina.pdf({ path: destino, preferCSSPageSize: true, printBackground: true, tagged: true });
  const { size } = await stat(destino);
  console.log(`${lang}: ${destino} (${(size / 1048576).toFixed(1)} MB)`);
  await pagina.close();
}

await navegador.close();
servidor.close();
