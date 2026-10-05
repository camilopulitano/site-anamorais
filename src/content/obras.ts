import type { ImageMetadata } from 'astro';

/**
 * Acervo de Ana Quintanas.
 *
 * Portfólio, não loja: nenhuma obra tem preço. Cada uma mostra apenas se
 * está disponível ou vendida.
 *
 * Os títulos atuais são provisórios (descritivos). Técnica, dimensões e ano
 * são opcionais: a ficha só mostra o que estiver preenchido aqui.
 *
 * A ordem desta lista é a ordem da galeria.
 */

export type Situacao = 'disponivel' | 'vendida';
export type Tema = 'brasil' | 'flores' | 'retrato' | 'fora';

export interface Obra {
  slug: string;
  titulo: string;
  situacao: Situacao;
  tema: Tema;
  /** Descrição da imagem para quem usa leitor de tela. */
  alt: string;
  tecnica?: string;
  dimensoes?: string;
  ano?: number;
}

export const TEMAS: Record<Tema, string> = {
  brasil: 'Brasil',
  flores: 'Flores e naturezas-mortas',
  retrato: 'Retrato',
  fora: 'Outros lugares',
};

export const obras: Obra[] = [
  { slug: 'morro-colorido', titulo: 'Morro colorido', situacao: 'vendida', tema: 'brasil', alt: 'Morro com casas coloridas empilhadas, fios elétricos e roupas no varal; um menino desce a escadaria e o morro Dois Irmãos aparece ao fundo' },
  { slug: 'rua-de-pedra', titulo: 'Rua de pedra', situacao: 'disponivel', tema: 'brasil', alt: 'Rua de pedra em cidade colonial, casas brancas com barrado amarelo e janelas verdes, cacto e mata, montanhas azuis ao fundo' },
  { slug: 'ipe-amarelo', titulo: 'Ipê-amarelo', situacao: 'vendida', tema: 'brasil', alt: 'Ipê-amarelo florido sobre casa colonial branca de portas verdes, céu azul' },
  { slug: 'hibiscos', titulo: 'Hibiscos', situacao: 'disponivel', tema: 'flores', alt: 'Dois hibiscos vermelhos entre folhagem verde' },
  { slug: 'cataratas-do-iguacu', titulo: 'Cataratas do Iguaçu', situacao: 'vendida', tema: 'brasil', alt: 'Cataratas do Iguaçu, quedas d’água entre a mata' },
  { slug: 'retrato', titulo: 'Retrato', situacao: 'disponivel', tema: 'retrato', alt: 'Retrato de mulher de cabelos cacheados escuros e blusa rosa' },
  { slug: 'araras-azuis', titulo: 'Araras-azuis', situacao: 'vendida', tema: 'brasil', alt: 'Casal de araras-azuis de olhos amarelos' },
  { slug: 'largo-da-igreja', titulo: 'Largo da igreja', situacao: 'disponivel', tema: 'brasil', alt: 'Casario colonial com casa amarela de janelas azuis diante de uma igreja branca e ocre' },
  { slug: 'casa-amarela', titulo: 'Casa amarela', situacao: 'vendida', tema: 'brasil', alt: 'Casa amarela com escada, vasos de plantas e folhagem em primeiro plano' },
  { slug: 'natureza-morta-com-frutas', titulo: 'Natureza-morta com frutas', situacao: 'disponivel', tema: 'flores', alt: 'Natureza-morta com uvas, figos, pêssegos, melancia e taça sobre mesa' },
  { slug: 'canion', titulo: 'Cânion', situacao: 'vendida', tema: 'brasil', alt: 'Paredões de um cânion cobertos de mata sob céu azul' },
  { slug: 'araucarias', titulo: 'Araucárias', situacao: 'vendida', tema: 'brasil', alt: 'Araucárias sobre colinas douradas com serras azuladas ao fundo' },
  { slug: 'rosas-brancas', titulo: 'Rosas brancas', situacao: 'disponivel', tema: 'flores', alt: 'Rosas brancas e rosadas em vaso dourado pintado com flores' },
  { slug: 'primavera-na-rua', titulo: 'Primavera na rua', situacao: 'vendida', tema: 'brasil', alt: 'Rua de pedra entre casas coloniais sob uma primavera florida' },
  { slug: 'gato-na-janela', titulo: 'Gato na janela', situacao: 'disponivel', tema: 'flores', alt: 'Gato preto no parapeito olhando o jardim, ao lado de vaso azul com flores' },
  { slug: 'ladeira', titulo: 'Ladeira', situacao: 'vendida', tema: 'brasil', alt: 'Ladeira de pedra entre casarios brancos e amarelos com torre de igreja' },
  { slug: 'sobrado-e-charrete', titulo: 'Sobrado e charrete', situacao: 'vendida', tema: 'brasil', alt: 'Sobrado colonial de janelas azuis com charrete na rua e primavera vermelha' },
  { slug: 'janela-para-a-toscana', titulo: 'Janela para a Toscana', situacao: 'disponivel', tema: 'fora', alt: 'Janela de madeira aberta para campos da Toscana com ciprestes' },
  { slug: 'vale-verde', titulo: 'Vale verde', situacao: 'disponivel', tema: 'fora', alt: 'Vale verde com colinas, árvores e um galpão de telhado vermelho' },
  { slug: 'campo-dourado', titulo: 'Campo dourado', situacao: 'vendida', tema: 'fora', alt: 'Campo dourado com arbustos e mata ao fundo' },
  { slug: 'terraco-na-toscana', titulo: 'Terraço na Toscana', situacao: 'vendida', tema: 'fora', alt: 'Terraço com mesa, vinho e pão diante de vinhedos na Toscana' },
  { slug: 'campo-de-lavanda', titulo: 'Campo de lavanda', situacao: 'vendida', tema: 'fora', alt: 'Campo de lavanda com ciprestes e casa ao fundo' },
];

const imagens = import.meta.glob<{ default: ImageMetadata }>('../assets/obras/*.jpg', { eager: true });

/** Falha no build se faltar imagem ou se houver slug repetido. */
function validar(): void {
  const vistos = new Set<string>();
  for (const obra of obras) {
    if (vistos.has(obra.slug)) throw new Error(`[obras] slug repetido: ${obra.slug}`);
    vistos.add(obra.slug);
    if (!imagens[`../assets/obras/${obra.slug}.jpg`]) {
      throw new Error(`[obras] falta a imagem src/assets/obras/${obra.slug}.jpg`);
    }
  }
}
validar();

export function imagemDe(obra: Obra): ImageMetadata {
  return imagens[`../assets/obras/${obra.slug}.jpg`].default;
}

export function obraPorSlug(slug: string): Obra {
  const obra = obras.find((o) => o.slug === slug);
  if (!obra) throw new Error(`[obras] obra não encontrada: ${slug}`);
  return obra;
}

export const disponiveis = obras.filter((o) => o.situacao === 'disponivel');
export const vendidas = obras.filter((o) => o.situacao === 'vendida');
