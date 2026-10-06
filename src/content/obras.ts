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
  /**
   * Texto "Sobre a obra" da ficha. Os textos atuais são rascunhos descritivos
   * (o que se vê na tela) para a Ana revisar ou trocar pelos dela.
   */
  sobre?: string;
  tecnica?: string;
  dimensoes?: string;
  ano?: number;
  /** Link de um post do Instagram sobre esta obra (aparece dentro da ficha). */
  instagram?: string;
  /**
   * Fotos extras da obra (com a artista, na parede…), em
   * src/assets/obras/extras/<arquivo>.jpg. Aparecem abaixo da imagem na ficha.
   */
  fotos?: { arquivo: string; alt: string }[];
}

export const TEMAS: Record<Tema, string> = {
  brasil: 'Brasil',
  flores: 'Flores e naturezas-mortas',
  retrato: 'Retrato',
  fora: 'Outros lugares',
};

export const obras: Obra[] = [
  { slug: 'morro-colorido', titulo: 'Morro colorido', situacao: 'vendida', tema: 'brasil', alt: 'Morro com casas coloridas empilhadas, fios elétricos e roupas no varal; um menino desce a escadaria e o morro Dois Irmãos aparece ao fundo', sobre: 'Casas empilhadas morro acima, fios cruzando o céu e roupa no varal: o cotidiano de uma comunidade carioca pintado com cor e respeito. Lá embaixo, um menino desce a escadaria; ao fundo, o Dois Irmãos fecha a paisagem.' },
  { slug: 'rua-de-pedra', titulo: 'Rua de pedra', situacao: 'disponivel', tema: 'brasil', alt: 'Rua de pedra em cidade colonial, casas brancas com barrado amarelo e janelas verdes, cacto e mata, montanhas azuis ao fundo', sobre: 'Uma rua de pedra entre casas brancas de barrado amarelo, num casario colonial que parece ter parado no tempo. O cacto, a mata e as montanhas azuis ao fundo trazem o interior do Brasil para dentro da cena.' },
  { slug: 'capela-a-beira-mar', titulo: 'Praia de Carneiros', situacao: 'vendida', tema: 'brasil', tecnica: 'Acrílico sobre tela', dimensoes: '90 × 40 cm', ano: 2026, fotos: [{ arquivo: 'capela-a-beira-mar-com-a-ana', alt: 'Ana Quintanas, de avental, segurando a tela Praia de Carneiros no ateliê' }], alt: 'Capela colonial branca de janelas verdes numa praia de água turquesa, entre coqueiros, com dois barcos ancorados à direita', sobre: 'Uma capela branca de janelas verdes à beira de uma praia de água turquesa, cercada de coqueiros. Os barcos ancorados e o reflexo na água dão à tela a calma de uma manhã no litoral brasileiro.' },
  { slug: 'ipe-amarelo', titulo: 'Ipê-amarelo', situacao: 'vendida', tema: 'brasil', alt: 'Ipê-amarelo florido sobre casa colonial branca de portas verdes, céu azul', sobre: 'O ipê-amarelo em plena florada cobre uma casa colonial de portas verdes. Uma das imagens mais brasileiras que existem, pintada contra um céu muito azul.' },
  { slug: 'hibiscos', titulo: 'Hibiscos', situacao: 'disponivel', tema: 'flores', alt: 'Dois hibiscos vermelhos entre folhagem verde', sobre: 'Dois hibiscos vermelhos abertos entre folhas verdes. A tela aproxima o olhar da flor até quase tocá-la, com atenção às dobras das pétalas e ao pólen.' },
  { slug: 'casa-azul', titulo: 'Casa azul', situacao: 'vendida', tema: 'brasil', tecnica: 'Óleo sobre tela', dimensoes: '90 × 70 cm', ano: 2026, alt: 'Casa de fachada azul e branca, número 920, com janelas de venezianas brancas, vasos de plantas e calçada de pedras portuguesas em ondas pretas e brancas sob céu de entardecer', sobre: 'A fachada azul e branca de uma casa de número 920, com venezianas, vasos de plantas e a calçada de pedras portuguesas em ondas. O céu de entardecer aquece a cena e realça cada detalhe da arquitetura.' },
  { slug: 'cataratas-do-iguacu', titulo: 'Cataratas do Iguaçu', situacao: 'disponivel', tema: 'brasil', alt: 'Cataratas do Iguaçu, quedas d’água entre a mata', sobre: 'As quedas das Cataratas do Iguaçu entre a mata, com a força da água e a névoa que sobe do rio. Uma paisagem pintada de perto, com o verde da floresta em volta.' },
  { slug: 'retrato', titulo: 'Retrato', situacao: 'disponivel', tema: 'retrato', alt: 'Retrato de mulher de cabelos cacheados escuros e blusa rosa', sobre: 'Retrato de uma mulher de cabelos cacheados escuros e olhar direto. A pele, a luz e a expressão serena mostram a atenção da Ana à figura humana.' },
  { slug: 'araras-azuis', titulo: 'Araras-azuis', situacao: 'vendida', tema: 'brasil', tecnica: 'Óleo sobre tela', dimensoes: '90 × 70 cm', instagram: 'https://www.instagram.com/p/DDPIJ5xRbmg/', alt: 'Casal de araras-azuis de olhos amarelos', sobre: 'Um casal de araras-azuis lado a lado, com os olhos amarelos em destaque. O azul intenso das penas e a proximidade entre as duas aves dão à tela um tom de afeto.' },
  { slug: 'largo-da-igreja', titulo: 'Largo da igreja', situacao: 'disponivel', tema: 'brasil', alt: 'Casario colonial com casa amarela de janelas azuis diante de uma igreja branca e ocre', sobre: 'Uma casa amarela de janelas azuis diante de uma igreja branca e ocre, no largo de uma cidade histórica. O jogo de cores do casario colonial é o centro da composição.' },
  { slug: 'casa-amarela', titulo: 'Casa amarela', situacao: 'vendida', tema: 'brasil', alt: 'Casa amarela com escada, vasos de plantas e folhagem em primeiro plano', sobre: 'Uma casa amarela com escada, vasos de plantas e folhagem em primeiro plano. Uma cena simples do dia a dia, banhada de luz, daquelas que a gente vê sem reparar.' },
  { slug: 'natureza-morta-com-frutas', titulo: 'Natureza-morta com frutas', situacao: 'disponivel', tema: 'flores', alt: 'Natureza-morta com uvas, figos, pêssegos, melancia e taça sobre mesa', sobre: 'Uvas, figos, pêssegos, melancia e uma taça sobre a mesa, numa natureza-morta de cores quentes e fundo escuro. A tela trabalha o brilho, a textura e o volume de cada fruta.' },
  { slug: 'canion', titulo: 'Cânion', situacao: 'vendida', tema: 'brasil', fotos: [{ arquivo: 'canion-com-a-ana', alt: 'Ana Quintanas, de avental de pintura, segurando a tela Cânion e sorrindo para ela' }], alt: 'Paredões de um cânion cobertos de mata sob céu azul', sobre: 'Os paredões de um cânion cobertos de mata, vistos de longe sob um céu azul. A escala da paisagem e a luz sobre a rocha mostram a grandiosidade da natureza brasileira.' },
  { slug: 'araucarias', titulo: 'Araucárias', situacao: 'vendida', tema: 'brasil', alt: 'Araucárias sobre colinas douradas com serras azuladas ao fundo', sobre: 'Araucárias sobre colinas douradas, com serras azuladas ao fundo. A árvore símbolo do Sul do Brasil aparece em primeiro plano, numa luz quente e aberta.' },
  { slug: 'rosas-brancas', titulo: 'Rosas brancas', situacao: 'disponivel', tema: 'flores', alt: 'Rosas brancas e rosadas em vaso dourado pintado com flores', sobre: 'Rosas brancas e rosadas num vaso dourado pintado com flores. Uma natureza-morta delicada, de luz suave e fundo quente.' },
  { slug: 'primavera-na-rua', titulo: 'Primavera na rua', situacao: 'vendida', tema: 'brasil', alt: 'Rua de pedra entre casas coloniais sob uma primavera florida', sobre: 'Uma rua de pedra entre casas coloniais, sob uma primavera em flor. O vermelho das flores contrasta com o branco das fachadas e conduz o olhar rua acima.' },
  { slug: 'gato-na-janela', titulo: 'Gato na janela', situacao: 'disponivel', tema: 'flores', alt: 'Gato preto no parapeito olhando o jardim, ao lado de vaso azul com flores', sobre: 'Um gato preto no parapeito, olhando o jardim, ao lado de um vaso azul com flores. A luz que entra pela janela dá à cena o ar de uma tarde tranquila em casa.' },
  { slug: 'ladeira', titulo: 'Ladeira', situacao: 'vendida', tema: 'brasil', alt: 'Ladeira de pedra entre casarios brancos e amarelos com torre de igreja', sobre: 'Uma ladeira de pedra entre casarios brancos e amarelos, com a torre da igreja ao fundo. A perspectiva leva o olhar para o alto, como quem sobe a cidade a pé.' },
  { slug: 'sobrado-e-charrete', titulo: 'Sobrado e charrete', situacao: 'vendida', tema: 'brasil', fotos: [{ arquivo: 'sobrado-e-charrete-com-a-ana', alt: 'Ana Quintanas sorrindo e segurando a tela Sobrado e charrete numa sala de luminárias acesas' }], alt: 'Sobrado colonial de janelas azuis com charrete na rua e primavera vermelha', sobre: 'Um sobrado colonial de janelas azuis, com uma charrete na rua de pedra e uma primavera vermelha na esquina. Uma cena que lembra as cidades históricas do Brasil.' },
  { slug: 'janela-para-a-toscana', titulo: 'Janela para a Toscana', situacao: 'disponivel', tema: 'fora', alt: 'Janela de madeira aberta para campos da Toscana com ciprestes', sobre: 'Uma janela de madeira aberta para os campos da Toscana, com ciprestes e um caminho entre a vegetação. A moldura da janela convida quem olha a entrar na paisagem.' },
  { slug: 'vale-verde', titulo: 'Vale verde', situacao: 'disponivel', tema: 'fora', alt: 'Vale verde com colinas, árvores e um galpão de telhado vermelho', sobre: 'Um vale de colinas verdes, árvores e um galpão de telhado vermelho, sob uma névoa leve. Uma paisagem tranquila, pintada em tons suaves de verde.' },
  { slug: 'campo-dourado', titulo: 'Campo dourado', situacao: 'vendida', tema: 'fora', alt: 'Campo dourado com arbustos e mata ao fundo', sobre: 'Um campo dourado com arbustos e mata ao fundo, banhado de luz quente. A tela é construída em camadas de amarelo, verde e ocre.' },
  { slug: 'terraco-na-toscana', titulo: 'Terraço na Toscana', situacao: 'vendida', tema: 'fora', fotos: [{ arquivo: 'terraco-na-toscana-com-a-ana', alt: 'Ana Quintanas, de vestido vermelho, ao lado da tela Terraço na Toscana, que é quase da altura dela' }], alt: 'Terraço com mesa, vinho e pão diante de vinhedos na Toscana', sobre: 'Um terraço com mesa, vinho e pão diante dos vinhedos da Toscana, emoldurado por plantas e pedra. Um convite a sentar e olhar a paisagem.' },
  { slug: 'campo-de-lavanda', titulo: 'Campo de lavanda', situacao: 'vendida', tema: 'fora', alt: 'Campo de lavanda com ciprestes e casa ao fundo', sobre: 'Fileiras de lavanda em flor, com ciprestes e uma casa ao fundo. O roxo do campo e o verde dos ciprestes fazem desta uma das telas mais coloridas do acervo.' },
];

const imagens = import.meta.glob<{ default: ImageMetadata }>('../assets/obras/*.jpg', { eager: true });
const extras = import.meta.glob<{ default: ImageMetadata }>('../assets/obras/extras/*.jpg', { eager: true });

/** Falha no build se faltar imagem ou se houver slug repetido. */
function validar(): void {
  const vistos = new Set<string>();
  for (const obra of obras) {
    if (vistos.has(obra.slug)) throw new Error(`[obras] slug repetido: ${obra.slug}`);
    vistos.add(obra.slug);
    if (!imagens[`../assets/obras/${obra.slug}.jpg`]) {
      throw new Error(`[obras] falta a imagem src/assets/obras/${obra.slug}.jpg`);
    }
    for (const f of obra.fotos ?? []) {
      if (!extras[`../assets/obras/extras/${f.arquivo}.jpg`]) {
        throw new Error(`[obras] falta a foto src/assets/obras/extras/${f.arquivo}.jpg (${obra.slug})`);
      }
    }
  }
}
validar();

export function imagemDe(obra: Obra): ImageMetadata {
  return imagens[`../assets/obras/${obra.slug}.jpg`].default;
}

export function fotosDe(obra: Obra): { src: ImageMetadata; alt: string }[] {
  return (obra.fotos ?? []).map((f) => ({ src: extras[`../assets/obras/extras/${f.arquivo}.jpg`].default, alt: f.alt }));
}

export function obraPorSlug(slug: string): Obra {
  const obra = obras.find((o) => o.slug === slug);
  if (!obra) throw new Error(`[obras] obra não encontrada: ${slug}`);
  return obra;
}

export const disponiveis = obras.filter((o) => o.situacao === 'disponivel');
export const vendidas = obras.filter((o) => o.situacao === 'vendida');
