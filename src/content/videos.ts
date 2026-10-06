/**
 * Vídeos da página "Obras em vídeo" (/videos).
 *
 * Cada item é um Reels (ou post com vídeo) do Instagram da Ana. A ordem da
 * lista é a ordem da página. Para incluir um vídeo novo, é só acrescentar
 * uma linha com o link e a legenda (de preferência a legenda dela no post).
 */
export interface Video {
  /** Link do Reels/post, ex.: https://www.instagram.com/reel/XXXX/ (rastreadores são removidos sozinhos). */
  url: string;
  /** Legenda curta mostrada abaixo do vídeo. */
  legenda: string;
}

export const videos: Video[] = [
  {
    url: 'https://www.instagram.com/reel/DTDHINqEw3M/',
    legenda:
      'Frida. Uma das minhas obras preferidas. Frida é sinônimo de força e autenticidade. Inspira porque transformou dor em arte, vulnerabilidade em potência.',
  },
  {
    url: 'https://www.instagram.com/reel/DdoWAkdzGZg/',
    legenda: 'É um estudo que faço para entender a luz e a sombra antes de aplicar as cores.',
  },
  {
    url: 'https://www.instagram.com/reel/DcD4x8oTv2R/',
    legenda: 'Treino, concentração e uma boa playlist.',
  },
];
