/**
 * Textos do site em cada idioma.
 *
 * Português é o original (texto da Ana, na íntegra). As outras línguas são
 * traduções feitas a partir dele — vale uma revisão por quem fala a língua,
 * principalmente o chinês.
 */
import type { Idioma } from './idiomas';

export interface Textos {
  menu: { obras: string; videos: string; sobre: string; contato: string; pular: string; idioma: string };
  selo: { disponivel: string; vendida: string };
  temas: { brasil: string; flores: string; retrato: string; fora: string };
  tecnicas: Record<string, string>;
  legendasFotos: Record<string, string>;
  profissao: string;
  rodapeDireitos: string;
  novaAba: string;
  meta: { titulo: string; descricao: string };
  inicio: {
    frase: string;
    fraseDestaque: string;
    paragrafo: string;
    verObras: string;
    sobreAna: string;
    fotoAlt: string;
    legendaAntes: string;
    dispSobrancelha: string;
    dispTitulo: string;
    verDisponiveis: string;
    brasilCitacao: string;
    verBrasil: string;
    chamadaSobre: string;
    lerTexto: string;
    fotoSobreAlt: string;
  };
  obras: {
    titulo: string;
    descricao: string;
    intro: string;
    todas: string;
    disponiveis: string;
    vendidas: string;
    todosTemas: string;
    grupoSituacao: string;
    grupoTema: string;
    mostrandoUma: string;
    /** Use {n} para o número. */
    mostrandoVarias: string;
    vazio: string;
  };
  obra: {
    trilha: string;
    sobreObra: string;
    tecnica: string;
    dimensoes: string;
    ano: string;
    tema: string;
    certificadoForte: string;
    certificadoResto: string;
    vendidaNota: string;
    notaWhats: string;
    verDisponiveis: string;
    noInstagram: string;
    verNoInstagram: string;
    maisFotos: string;
    outras: string;
    maisTema: (tema: string) => string;
    outrasObras: string;
    verTodas: string;
    pintura: string;
    statusDisponivel: string;
    statusVendida: string;
  };
  consultar: { botao: string; leitor: (titulo: string) => string };
  whatsapp: {
    ola: string;
    disponivel: (titulo: string) => string;
    vendida: (titulo: string) => string;
  };
  videos: { titulo: string; sobrancelha: string; intro: string; descricao: string; verVideo: string; mais: string; emBreve: string };
  sobre: {
    descricao: string;
    fotoAlt: string;
    legendaAntes: string;
    paragrafos: string[];
    citacao: string;
    fotosAtelie: [string, string, string];
    janelaAlt: string;
  };
  contato: { titulo: string; texto: string; certificado: string; retratoAlt: string };
  naoEncontrada: { titulo: string; texto: string; botao: string };
}

const pt: Textos = {
  menu: { obras: 'Obras', videos: 'Vídeos', sobre: 'Sobre', contato: 'Contato', pular: 'Pular para o conteúdo', idioma: 'Idioma' },
  selo: { disponivel: 'Disponível', vendida: 'Vendida' },
  temas: { brasil: 'Brasil', flores: 'Flores e naturezas-mortas', retrato: 'Retrato', fora: 'Outros lugares' },
  tecnicas: {},
  legendasFotos: {},
  profissao: 'Pintora brasileira',
  rodapeDireitos: 'Todas as imagens são de obras da artista',
  novaAba: '(abre em nova aba)',
  meta: {
    titulo: 'Ana Quintanas — pintora brasileira',
    descricao:
      'Portfólio de Ana Quintanas, artista plástica e pintora brasileira. Lugares, histórias e memórias: paisagens, casas e natureza pelo olhar dela.',
  },
  inicio: {
    frase: 'Pinto o que me toca:',
    fraseDestaque: 'lugares, histórias e memórias.',
    paragrafo:
      'Entre paisagens, casas e natureza, cada obra carrega um pouco do meu olhar e da minha história. Aqui, compartilho essas pinturas com você.',
    verObras: 'Ver as obras',
    sobreAna: 'Sobre a Ana',
    fotoAlt: 'Ana Quintanas sorrindo, sentada no ateliê diante da tela Hibiscos',
    legendaAntes: 'Ana Quintanas no ateliê, com',
    dispSobrancelha: 'No ateliê agora',
    dispTitulo: 'Obras disponíveis',
    verDisponiveis: 'Ver todas as disponíveis →',
    brasilCitacao:
      '“Meu trabalho não está preso a um único tema, mas existe uma coisa que conecta tudo: o meu olhar sobre o Brasil.”',
    verBrasil: 'Ver todas as obras do Brasil →',
    chamadaSobre: 'Em muitos momentos da minha vida, quando me faltaram palavras, caminhos e até força, a arte permaneceu.',
    lerTexto: 'Ler o texto da Ana →',
    fotoSobreAlt: 'Ana Quintanas pintando diante do cavalete, contra a luz da janela',
  },
  obras: {
    titulo: 'Obras',
    descricao:
      'As pinturas de Ana Quintanas: Brasil, flores e naturezas-mortas, retrato e outros lugares. Cada obra mostra se está disponível ou vendida.',
    intro:
      'Podem ser paisagens, cidades, casas, natureza, cenas simples do cotidiano, cores, contrastes ou lugares que carregam história.',
    todas: 'Todas',
    disponiveis: 'Disponíveis',
    vendidas: 'Vendidas',
    todosTemas: 'Todos os temas',
    grupoSituacao: 'Situação',
    grupoTema: 'Tema',
    mostrandoUma: 'Mostrando 1 obra',
    mostrandoVarias: 'Mostrando {n} obras',
    vazio: 'Nenhuma obra com essa combinação. Tente outro tema.',
  },
  obra: {
    trilha: 'Você está em',
    sobreObra: 'Sobre a obra',
    tecnica: 'Técnica',
    dimensoes: 'Dimensões',
    ano: 'Ano',
    tema: 'Tema',
    certificadoForte: 'Obra original',
    certificadoResto: ', acompanhada de certificado de autenticidade assinado pela artista.',
    vendidaNota: 'Esta obra já foi vendida — mas a Ana pode contar mais sobre ela e sobre o trabalho dela.',
    notaWhats: 'A conversa segue pelo WhatsApp da Ana.',
    verDisponiveis: 'Ver obras disponíveis',
    noInstagram: 'No Instagram',
    verNoInstagram: 'Ver esta obra no Instagram',
    maisFotos: 'Mais fotos da obra',
    outras: 'Outras obras',
    maisTema: (t) => `Mais — ${t}`,
    outrasObras: 'Outras obras',
    verTodas: 'Ver todas →',
    pintura: 'pintura de Ana Quintanas',
    statusDisponivel: 'Obra disponível.',
    statusVendida: 'Obra vendida.',
  },
  consultar: {
    botao: 'Consultar valor',
    leitor: (t) => ` de “${t}” no WhatsApp da Ana (abre em nova aba)`,
  },
  whatsapp: {
    ola: 'Olá, Ana! Vim pelo seu site.',
    disponivel: (t) => `Olá, Ana! Vi a obra "${t}" no seu site e gostaria de saber o valor e mais informações.`,
    vendida: (t) =>
      `Olá, Ana! Vi a obra "${t}" no seu site. Sei que ela já foi vendida, mas gostaria de saber valores e mais informações sobre o seu trabalho.`,
  },
  videos: {
    titulo: 'Obras em vídeo',
    sobrancelha: 'No ateliê',
    intro: 'O processo de pintura, do estudo de luz e sombra às cores, direto do Instagram da Ana.',
    descricao: 'Vídeos de Ana Quintanas pintando: estudos de luz e sombra, o processo de cada tela e a rotina do ateliê.',
    verVideo: 'Ver o vídeo no Instagram',
    mais: 'Mais vídeos no Instagram',
    emBreve: 'Em breve.',
  },
  sobre: {
    descricao:
      'Ana Quintanas, artista plástica e pintora brasileira. Pinta desde 2015, numa pintura ligada ao naturalismo e aberta a diferentes linguagens e estilos.',
    fotoAlt:
      'Ana Quintanas de macacão jeans, sentada no ateliê ao lado da tela Hibiscos no cavalete; ao fundo, outras pinturas dela na prateleira',
    legendaAntes: 'No ateliê, ao lado de',
    paragrafos: [
      'Sou Ana Quintanas, artista plástica e pintora brasileira. Iniciei minha trajetória na pintura em 2015 e, desde então, fui construindo minha formação por meio de cursos, experiências com diferentes artistas e da prática, explorando técnicas e possibilidades para encontrar minha própria expressão.',
      'Sou filha de Anilfa Quintanas Morais e Julio Morais. Cresci em uma família que, mesmo com uma trajetória marcada por desafios, sempre encontrou espaço para incentivar minha criatividade. Esse apoio faz parte da minha história e de quem me tornei.',
      'Minha pintura tem uma ligação com o naturalismo, mas também se abre a diferentes linguagens e estilos. Gosto de explorar cores, paisagens e elementos que me tocam, permitindo que minhas experiências e meu olhar estejam presentes em cada obra.',
      'Hoje, compartilho a vida com meu esposo Felipe e nosso filho Benício. Entre a pintura, a maternidade e a família, sigo construindo minha trajetória, aprendendo e encontrando novos sentidos para o que faço.',
      'Em muitos momentos da minha vida, quando me faltaram palavras, caminhos e até força, a arte permaneceu. E talvez seja por isso que hoje eu tenha tanto desejo de compartilhá-la com outras pessoas.',
    ],
    citacao:
      '“Gosto de explorar cores, paisagens e elementos que me tocam, permitindo que minhas experiências e meu olhar estejam presentes em cada obra.”',
    fotosAtelie: [
      'Ana pintando o miolo de um hibisco vermelho na tela',
      'Mão de Ana segurando o pincel junto à tela, na luz quente da tarde',
      'Ana sentada diante do cavalete, pintando contra a luz da janela',
    ],
    janelaAlt: 'Ana Quintanas sorrindo, apoiada na moldura pintada de Janela para a Toscana',
  },
  contato: {
    titulo: 'Contato',
    texto: 'Quer saber mais sobre uma obra disponível? Fale direto com a Ana.',
    certificado: 'Toda obra é original e acompanha certificado de autenticidade assinado pela artista.',
    retratoAlt: 'Retrato de Ana Quintanas sorrindo, de óculos, no ateliê',
  },
  naoEncontrada: {
    titulo: 'Essa página não existe.',
    texto: 'Talvez a obra tenha mudado de nome. As pinturas estão todas na galeria.',
    botao: 'Ver as obras',
  },
};

const en: Textos = {
  menu: { obras: 'Works', videos: 'Videos', sobre: 'About', contato: 'Contact', pular: 'Skip to content', idioma: 'Language' },
  selo: { disponivel: 'Available', vendida: 'Sold' },
  temas: { brasil: 'Brazil', flores: 'Flowers and still lifes', retrato: 'Portrait', fora: 'Other places' },
  tecnicas: { 'Óleo sobre tela': 'Oil on canvas', 'Acrílico sobre tela': 'Acrylic on canvas' },
  legendasFotos: { 'Com a artista': 'With the artist', 'Na parede': 'On the wall', 'No ateliê': 'In the studio' },
  profissao: 'Brazilian painter',
  rodapeDireitos: 'All images are works by the artist',
  novaAba: '(opens in a new tab)',
  meta: {
    titulo: 'Ana Quintanas — Brazilian painter',
    descricao:
      'Portfolio of Ana Quintanas, Brazilian visual artist and painter. Places, stories and memories: landscapes, houses and nature through her eyes.',
  },
  inicio: {
    frase: 'I paint what moves me:',
    fraseDestaque: 'places, stories and memories.',
    paragrafo:
      'Among landscapes, houses and nature, each work carries a little of my way of seeing and of my story. Here, I share these paintings with you.',
    verObras: 'See the works',
    sobreAna: 'About Ana',
    fotoAlt: 'Ana Quintanas smiling, seated in the studio in front of the painting Hibiscos',
    legendaAntes: 'Ana Quintanas in the studio, with',
    dispSobrancelha: 'In the studio now',
    dispTitulo: 'Available works',
    verDisponiveis: 'See all available works →',
    brasilCitacao: '“My work is not tied to a single theme, but there is one thing that connects it all: the way I see Brazil.”',
    verBrasil: 'See all works of Brazil →',
    chamadaSobre: 'At many moments in my life, when words, paths and even strength failed me, art remained.',
    lerTexto: 'Read Ana’s story →',
    fotoSobreAlt: 'Ana Quintanas painting at the easel, against the light of the window',
  },
  obras: {
    titulo: 'Works',
    descricao:
      'The paintings of Ana Quintanas: Brazil, flowers and still lifes, portrait and other places. Each work shows whether it is available or sold.',
    intro: 'They can be landscapes, cities, houses, nature, simple everyday scenes, colors, contrasts or places that carry history.',
    todas: 'All',
    disponiveis: 'Available',
    vendidas: 'Sold',
    todosTemas: 'All themes',
    grupoSituacao: 'Status',
    grupoTema: 'Theme',
    mostrandoUma: 'Showing 1 work',
    mostrandoVarias: 'Showing {n} works',
    vazio: 'No works match this combination. Try another theme.',
  },
  obra: {
    trilha: 'You are here',
    sobreObra: 'About the work',
    tecnica: 'Technique',
    dimensoes: 'Dimensions',
    ano: 'Year',
    tema: 'Theme',
    certificadoForte: 'Original work',
    certificadoResto: ', accompanied by a certificate of authenticity signed by the artist.',
    vendidaNota: 'This work has been sold — but Ana can tell you more about it and about her work.',
    notaWhats: 'The conversation continues on Ana’s WhatsApp.',
    verDisponiveis: 'See available works',
    noInstagram: 'On Instagram',
    verNoInstagram: 'See this work on Instagram',
    maisFotos: 'More photos of the work',
    outras: 'Other works',
    maisTema: (t) => `More — ${t}`,
    outrasObras: 'Other works',
    verTodas: 'See all →',
    pintura: 'painting by Ana Quintanas',
    statusDisponivel: 'Available.',
    statusVendida: 'Sold.',
  },
  consultar: {
    botao: 'Ask for the price',
    leitor: (t) => ` for “${t}” on Ana’s WhatsApp (opens in a new tab)`,
  },
  whatsapp: {
    ola: 'Hello, Ana! I found you through your website.',
    disponivel: (t) => `Hello, Ana! I saw the work "${t}" on your website and would like to know the price and more details.`,
    vendida: (t) =>
      `Hello, Ana! I saw the work "${t}" on your website. I know it has been sold, but I would like to know prices and more about your work.`,
  },
  videos: {
    titulo: 'Works on video',
    sobrancelha: 'In the studio',
    intro: 'The painting process, from the study of light and shadow to color, straight from Ana’s Instagram.',
    descricao: 'Videos of Ana Quintanas painting: studies of light and shadow, the process behind each canvas and life in the studio.',
    verVideo: 'Watch the video on Instagram',
    mais: 'More videos on Instagram',
    emBreve: 'Coming soon.',
  },
  sobre: {
    descricao:
      'Ana Quintanas, Brazilian visual artist and painter. Painting since 2015, with work rooted in naturalism and open to different languages and styles.',
    fotoAlt:
      'Ana Quintanas in denim overalls, seated in the studio beside the painting Hibiscos on the easel; in the background, more of her paintings on the shelf',
    legendaAntes: 'In the studio, beside',
    paragrafos: [
      'I am Ana Quintanas, a Brazilian visual artist and painter. I began my journey in painting in 2015 and, since then, I have built my training through courses, experiences with different artists and practice, exploring techniques and possibilities to find my own expression.',
      'I am the daughter of Anilfa Quintanas Morais and Julio Morais. I grew up in a family that, despite a path marked by challenges, always found room to encourage my creativity. That support is part of my story and of who I have become.',
      'My painting has a connection with naturalism, but it also opens up to different languages and styles. I like to explore colors, landscapes and elements that move me, allowing my experiences and my way of seeing to be present in every work.',
      'Today, I share my life with my husband Felipe and our son Benício. Between painting, motherhood and family, I keep building my path, learning and finding new meaning in what I do.',
      'At many moments in my life, when words, paths and even strength failed me, art remained. And perhaps that is why today I have such a strong desire to share it with others.',
    ],
    citacao:
      '“I like to explore colors, landscapes and elements that move me, allowing my experiences and my way of seeing to be present in every work.”',
    fotosAtelie: [
      'Ana painting the center of a red hibiscus on the canvas',
      'Ana’s hand holding the brush against the canvas, in the warm afternoon light',
      'Ana seated at the easel, painting against the light of the window',
    ],
    janelaAlt: 'Ana Quintanas smiling, leaning on the painted frame of Janela para a Toscana',
  },
  contato: {
    titulo: 'Contact',
    texto: 'Would you like to know more about an available work? Talk directly to Ana.',
    certificado: 'Every work is original and comes with a certificate of authenticity signed by the artist.',
    retratoAlt: 'Portrait of Ana Quintanas smiling, wearing glasses, in the studio',
  },
  naoEncontrada: {
    titulo: 'This page does not exist.',
    texto: 'The work may have changed its name. All the paintings are in the gallery.',
    botao: 'See the works',
  },
};

const es: Textos = {
  menu: { obras: 'Obras', videos: 'Videos', sobre: 'Sobre mí', contato: 'Contacto', pular: 'Saltar al contenido', idioma: 'Idioma' },
  selo: { disponivel: 'Disponible', vendida: 'Vendida' },
  temas: { brasil: 'Brasil', flores: 'Flores y naturalezas muertas', retrato: 'Retrato', fora: 'Otros lugares' },
  tecnicas: { 'Óleo sobre tela': 'Óleo sobre lienzo', 'Acrílico sobre tela': 'Acrílico sobre lienzo' },
  legendasFotos: { 'Com a artista': 'Con la artista', 'Na parede': 'En la pared', 'No ateliê': 'En el taller' },
  profissao: 'Pintora brasileña',
  rodapeDireitos: 'Todas las imágenes son obras de la artista',
  novaAba: '(se abre en una pestaña nueva)',
  meta: {
    titulo: 'Ana Quintanas — pintora brasileña',
    descricao:
      'Portafolio de Ana Quintanas, artista plástica y pintora brasileña. Lugares, historias y memorias: paisajes, casas y naturaleza a través de su mirada.',
  },
  inicio: {
    frase: 'Pinto lo que me conmueve:',
    fraseDestaque: 'lugares, historias y memorias.',
    paragrafo:
      'Entre paisajes, casas y naturaleza, cada obra lleva un poco de mi mirada y de mi historia. Aquí comparto estas pinturas contigo.',
    verObras: 'Ver las obras',
    sobreAna: 'Sobre Ana',
    fotoAlt: 'Ana Quintanas sonriendo, sentada en el taller frente al cuadro Hibiscos',
    legendaAntes: 'Ana Quintanas en el taller, con',
    dispSobrancelha: 'En el taller ahora',
    dispTitulo: 'Obras disponibles',
    verDisponiveis: 'Ver todas las disponibles →',
    brasilCitacao: '“Mi trabajo no está atado a un único tema, pero hay algo que lo conecta todo: mi mirada sobre Brasil.”',
    verBrasil: 'Ver todas las obras de Brasil →',
    chamadaSobre: 'En muchos momentos de mi vida, cuando me faltaron palabras, caminos y hasta fuerzas, el arte permaneció.',
    lerTexto: 'Leer el texto de Ana →',
    fotoSobreAlt: 'Ana Quintanas pintando frente al caballete, a contraluz de la ventana',
  },
  obras: {
    titulo: 'Obras',
    descricao:
      'Las pinturas de Ana Quintanas: Brasil, flores y naturalezas muertas, retrato y otros lugares. Cada obra indica si está disponible o vendida.',
    intro:
      'Pueden ser paisajes, ciudades, casas, naturaleza, escenas sencillas de lo cotidiano, colores, contrastes o lugares que guardan historia.',
    todas: 'Todas',
    disponiveis: 'Disponibles',
    vendidas: 'Vendidas',
    todosTemas: 'Todos los temas',
    grupoSituacao: 'Situación',
    grupoTema: 'Tema',
    mostrandoUma: 'Mostrando 1 obra',
    mostrandoVarias: 'Mostrando {n} obras',
    vazio: 'Ninguna obra con esa combinación. Prueba otro tema.',
  },
  obra: {
    trilha: 'Estás en',
    sobreObra: 'Sobre la obra',
    tecnica: 'Técnica',
    dimensoes: 'Dimensiones',
    ano: 'Año',
    tema: 'Tema',
    certificadoForte: 'Obra original',
    certificadoResto: ', acompañada de certificado de autenticidad firmado por la artista.',
    vendidaNota: 'Esta obra ya fue vendida, pero Ana puede contarte más sobre ella y sobre su trabajo.',
    notaWhats: 'La conversación sigue por el WhatsApp de Ana.',
    verDisponiveis: 'Ver obras disponibles',
    noInstagram: 'En Instagram',
    verNoInstagram: 'Ver esta obra en Instagram',
    maisFotos: 'Más fotos de la obra',
    outras: 'Otras obras',
    maisTema: (t) => `Más — ${t}`,
    outrasObras: 'Otras obras',
    verTodas: 'Ver todas →',
    pintura: 'pintura de Ana Quintanas',
    statusDisponivel: 'Obra disponible.',
    statusVendida: 'Obra vendida.',
  },
  consultar: {
    botao: 'Consultar precio',
    leitor: (t) => ` de “${t}” en el WhatsApp de Ana (se abre en una pestaña nueva)`,
  },
  whatsapp: {
    ola: '¡Hola, Ana! Llegué por tu sitio web.',
    disponivel: (t) => `¡Hola, Ana! Vi la obra "${t}" en tu sitio web y me gustaría saber el precio y más información.`,
    vendida: (t) =>
      `¡Hola, Ana! Vi la obra "${t}" en tu sitio web. Sé que ya fue vendida, pero me gustaría saber precios y más información sobre tu trabajo.`,
  },
  videos: {
    titulo: 'Obras en video',
    sobrancelha: 'En el taller',
    intro: 'El proceso de pintura, del estudio de luz y sombra a los colores, directo del Instagram de Ana.',
    descricao: 'Videos de Ana Quintanas pintando: estudios de luz y sombra, el proceso de cada cuadro y la rutina del taller.',
    verVideo: 'Ver el video en Instagram',
    mais: 'Más videos en Instagram',
    emBreve: 'Próximamente.',
  },
  sobre: {
    descricao:
      'Ana Quintanas, artista plástica y pintora brasileña. Pinta desde 2015, con una obra ligada al naturalismo y abierta a distintos lenguajes y estilos.',
    fotoAlt:
      'Ana Quintanas con mono vaquero, sentada en el taller junto al cuadro Hibiscos en el caballete; al fondo, otras pinturas suyas en el estante',
    legendaAntes: 'En el taller, junto a',
    paragrafos: [
      'Soy Ana Quintanas, artista plástica y pintora brasileña. Comencé mi trayectoria en la pintura en 2015 y, desde entonces, fui construyendo mi formación a través de cursos, experiencias con diferentes artistas y la práctica, explorando técnicas y posibilidades para encontrar mi propia expresión.',
      'Soy hija de Anilfa Quintanas Morais y Julio Morais. Crecí en una familia que, aun con una trayectoria marcada por desafíos, siempre encontró espacio para incentivar mi creatividad. Ese apoyo forma parte de mi historia y de quien llegué a ser.',
      'Mi pintura tiene una relación con el naturalismo, pero también se abre a diferentes lenguajes y estilos. Me gusta explorar colores, paisajes y elementos que me conmueven, permitiendo que mis experiencias y mi mirada estén presentes en cada obra.',
      'Hoy comparto la vida con mi esposo Felipe y nuestro hijo Benício. Entre la pintura, la maternidad y la familia, sigo construyendo mi trayectoria, aprendiendo y encontrando nuevos sentidos para lo que hago.',
      'En muchos momentos de mi vida, cuando me faltaron palabras, caminos y hasta fuerzas, el arte permaneció. Y tal vez por eso hoy tengo tantas ganas de compartirlo con otras personas.',
    ],
    citacao:
      '“Me gusta explorar colores, paisajes y elementos que me conmueven, permitiendo que mis experiencias y mi mirada estén presentes en cada obra.”',
    fotosAtelie: [
      'Ana pintando el centro de un hibisco rojo en el lienzo',
      'La mano de Ana sosteniendo el pincel junto al lienzo, con la luz cálida de la tarde',
      'Ana sentada frente al caballete, pintando a contraluz de la ventana',
    ],
    janelaAlt: 'Ana Quintanas sonriendo, apoyada en el marco pintado de Janela para a Toscana',
  },
  contato: {
    titulo: 'Contacto',
    texto: '¿Quieres saber más sobre una obra disponible? Habla directamente con Ana.',
    certificado: 'Cada obra es original y viene con certificado de autenticidad firmado por la artista.',
    retratoAlt: 'Retrato de Ana Quintanas sonriendo, con gafas, en el taller',
  },
  naoEncontrada: {
    titulo: 'Esta página no existe.',
    texto: 'Puede que la obra haya cambiado de nombre. Todas las pinturas están en la galería.',
    botao: 'Ver las obras',
  },
};

const fr: Textos = {
  menu: { obras: 'Œuvres', videos: 'Vidéos', sobre: 'À propos', contato: 'Contact', pular: 'Aller au contenu', idioma: 'Langue' },
  selo: { disponivel: 'Disponible', vendida: 'Vendue' },
  temas: { brasil: 'Brésil', flores: 'Fleurs et natures mortes', retrato: 'Portrait', fora: 'Autres lieux' },
  tecnicas: { 'Óleo sobre tela': 'Huile sur toile', 'Acrílico sobre tela': 'Acrylique sur toile' },
  legendasFotos: { 'Com a artista': 'Avec l’artiste', 'Na parede': 'Au mur', 'No ateliê': 'À l’atelier' },
  profissao: 'Peintre brésilienne',
  rodapeDireitos: 'Toutes les images sont des œuvres de l’artiste',
  novaAba: '(s’ouvre dans un nouvel onglet)',
  meta: {
    titulo: 'Ana Quintanas — peintre brésilienne',
    descricao:
      'Portfolio d’Ana Quintanas, artiste plasticienne et peintre brésilienne. Lieux, histoires et souvenirs : paysages, maisons et nature à travers son regard.',
  },
  inicio: {
    frase: 'Je peins ce qui me touche :',
    fraseDestaque: 'des lieux, des histoires et des souvenirs.',
    paragrafo:
      'Entre paysages, maisons et nature, chaque œuvre porte un peu de mon regard et de mon histoire. Ici, je partage ces peintures avec vous.',
    verObras: 'Voir les œuvres',
    sobreAna: 'À propos d’Ana',
    fotoAlt: 'Ana Quintanas souriante, assise dans l’atelier devant le tableau Hibiscos',
    legendaAntes: 'Ana Quintanas dans l’atelier, avec',
    dispSobrancelha: 'À l’atelier en ce moment',
    dispTitulo: 'Œuvres disponibles',
    verDisponiveis: 'Voir toutes les œuvres disponibles →',
    brasilCitacao: '« Mon travail n’est pas attaché à un seul thème, mais une chose relie tout : mon regard sur le Brésil. »',
    verBrasil: 'Voir toutes les œuvres du Brésil →',
    chamadaSobre: 'À bien des moments de ma vie, quand les mots, les chemins et même la force m’ont manqué, l’art est resté.',
    lerTexto: 'Lire le texte d’Ana →',
    fotoSobreAlt: 'Ana Quintanas peignant devant le chevalet, à contre-jour de la fenêtre',
  },
  obras: {
    titulo: 'Œuvres',
    descricao:
      'Les peintures d’Ana Quintanas : Brésil, fleurs et natures mortes, portrait et autres lieux. Chaque œuvre indique si elle est disponible ou vendue.',
    intro:
      'Ce peuvent être des paysages, des villes, des maisons, la nature, de simples scènes du quotidien, des couleurs, des contrastes ou des lieux chargés d’histoire.',
    todas: 'Toutes',
    disponiveis: 'Disponibles',
    vendidas: 'Vendues',
    todosTemas: 'Tous les thèmes',
    grupoSituacao: 'Statut',
    grupoTema: 'Thème',
    mostrandoUma: '1 œuvre affichée',
    mostrandoVarias: '{n} œuvres affichées',
    vazio: 'Aucune œuvre ne correspond à cette combinaison. Essayez un autre thème.',
  },
  obra: {
    trilha: 'Vous êtes ici',
    sobreObra: 'À propos de l’œuvre',
    tecnica: 'Technique',
    dimensoes: 'Dimensions',
    ano: 'Année',
    tema: 'Thème',
    certificadoForte: 'Œuvre originale',
    certificadoResto: ', accompagnée d’un certificat d’authenticité signé par l’artiste.',
    vendidaNota: 'Cette œuvre a déjà été vendue — mais Ana peut vous en dire plus sur elle et sur son travail.',
    notaWhats: 'La conversation se poursuit sur le WhatsApp d’Ana.',
    verDisponiveis: 'Voir les œuvres disponibles',
    noInstagram: 'Sur Instagram',
    verNoInstagram: 'Voir cette œuvre sur Instagram',
    maisFotos: 'Plus de photos de l’œuvre',
    outras: 'Autres œuvres',
    maisTema: (t) => `Plus — ${t}`,
    outrasObras: 'Autres œuvres',
    verTodas: 'Voir tout →',
    pintura: 'peinture d’Ana Quintanas',
    statusDisponivel: 'Œuvre disponible.',
    statusVendida: 'Œuvre vendue.',
  },
  consultar: {
    botao: 'Demander le prix',
    leitor: (t) => ` de « ${t} » sur le WhatsApp d’Ana (s’ouvre dans un nouvel onglet)`,
  },
  whatsapp: {
    ola: 'Bonjour Ana ! Je viens de votre site.',
    disponivel: (t) => `Bonjour Ana ! J’ai vu l’œuvre « ${t} » sur votre site et j’aimerais connaître le prix et avoir plus d’informations.`,
    vendida: (t) =>
      `Bonjour Ana ! J’ai vu l’œuvre « ${t} » sur votre site. Je sais qu’elle a déjà été vendue, mais j’aimerais connaître vos prix et en savoir plus sur votre travail.`,
  },
  videos: {
    titulo: 'Œuvres en vidéo',
    sobrancelha: 'À l’atelier',
    intro: 'Le processus de peinture, de l’étude de la lumière et de l’ombre jusqu’aux couleurs, directement depuis l’Instagram d’Ana.',
    descricao:
      'Vidéos d’Ana Quintanas en train de peindre : études de lumière et d’ombre, le processus de chaque toile et la vie de l’atelier.',
    verVideo: 'Voir la vidéo sur Instagram',
    mais: 'Plus de vidéos sur Instagram',
    emBreve: 'Bientôt.',
  },
  sobre: {
    descricao:
      'Ana Quintanas, artiste plasticienne et peintre brésilienne. Elle peint depuis 2015, dans une démarche liée au naturalisme et ouverte à différents langages et styles.',
    fotoAlt:
      'Ana Quintanas en salopette en jean, assise dans l’atelier à côté du tableau Hibiscos sur le chevalet ; au fond, d’autres de ses peintures sur l’étagère',
    legendaAntes: 'À l’atelier, à côté de',
    paragrafos: [
      'Je suis Ana Quintanas, artiste plasticienne et peintre brésilienne. J’ai commencé mon parcours en peinture en 2015 et, depuis, j’ai construit ma formation à travers des cours, des expériences auprès de différents artistes et la pratique, en explorant des techniques et des possibilités pour trouver ma propre expression.',
      'Je suis la fille d’Anilfa Quintanas Morais et de Julio Morais. J’ai grandi dans une famille qui, malgré un parcours marqué par des difficultés, a toujours trouvé de la place pour encourager ma créativité. Ce soutien fait partie de mon histoire et de la personne que je suis devenue.',
      'Ma peinture a un lien avec le naturalisme, mais elle s’ouvre aussi à différents langages et styles. J’aime explorer les couleurs, les paysages et les éléments qui me touchent, en laissant mes expériences et mon regard être présents dans chaque œuvre.',
      'Aujourd’hui, je partage ma vie avec mon mari Felipe et notre fils Benício. Entre la peinture, la maternité et la famille, je continue de construire mon parcours, d’apprendre et de trouver de nouveaux sens à ce que je fais.',
      'À bien des moments de ma vie, quand les mots, les chemins et même la force m’ont manqué, l’art est resté. Et c’est peut-être pour cela qu’aujourd’hui j’ai un si grand désir de le partager avec d’autres personnes.',
    ],
    citacao:
      '« J’aime explorer les couleurs, les paysages et les éléments qui me touchent, en laissant mes expériences et mon regard être présents dans chaque œuvre. »',
    fotosAtelie: [
      'Ana peignant le cœur d’un hibiscus rouge sur la toile',
      'La main d’Ana tenant le pinceau près de la toile, dans la lumière chaude de l’après-midi',
      'Ana assise devant le chevalet, peignant à contre-jour de la fenêtre',
    ],
    janelaAlt: 'Ana Quintanas souriante, appuyée sur le cadre peint de Janela para a Toscana',
  },
  contato: {
    titulo: 'Contact',
    texto: 'Vous souhaitez en savoir plus sur une œuvre disponible ? Parlez directement avec Ana.',
    certificado: 'Chaque œuvre est originale et accompagnée d’un certificat d’authenticité signé par l’artiste.',
    retratoAlt: 'Portrait d’Ana Quintanas souriante, avec des lunettes, dans l’atelier',
  },
  naoEncontrada: {
    titulo: 'Cette page n’existe pas.',
    texto: 'L’œuvre a peut-être changé de nom. Toutes les peintures sont dans la galerie.',
    botao: 'Voir les œuvres',
  },
};

const it: Textos = {
  menu: { obras: 'Opere', videos: 'Video', sobre: 'Chi sono', contato: 'Contatti', pular: 'Vai al contenuto', idioma: 'Lingua' },
  selo: { disponivel: 'Disponibile', vendida: 'Venduta' },
  temas: { brasil: 'Brasile', flores: 'Fiori e nature morte', retrato: 'Ritratto', fora: 'Altri luoghi' },
  tecnicas: { 'Óleo sobre tela': 'Olio su tela', 'Acrílico sobre tela': 'Acrilico su tela' },
  legendasFotos: { 'Com a artista': 'Con l’artista', 'Na parede': 'Alla parete', 'No ateliê': 'Nello studio' },
  profissao: 'Pittrice brasiliana',
  rodapeDireitos: 'Tutte le immagini sono opere dell’artista',
  novaAba: '(si apre in una nuova scheda)',
  meta: {
    titulo: 'Ana Quintanas — pittrice brasiliana',
    descricao:
      'Portfolio di Ana Quintanas, artista visiva e pittrice brasiliana. Luoghi, storie e memorie: paesaggi, case e natura attraverso il suo sguardo.',
  },
  inicio: {
    frase: 'Dipingo ciò che mi tocca:',
    fraseDestaque: 'luoghi, storie e memorie.',
    paragrafo:
      'Tra paesaggi, case e natura, ogni opera porta con sé un po’ del mio sguardo e della mia storia. Qui condivido questi dipinti con te.',
    verObras: 'Vedi le opere',
    sobreAna: 'Su Ana',
    fotoAlt: 'Ana Quintanas sorridente, seduta nello studio davanti al quadro Hibiscos',
    legendaAntes: 'Ana Quintanas nello studio, con',
    dispSobrancelha: 'Ora nello studio',
    dispTitulo: 'Opere disponibili',
    verDisponiveis: 'Vedi tutte le disponibili →',
    brasilCitacao: '“Il mio lavoro non è legato a un unico tema, ma c’è una cosa che collega tutto: il mio sguardo sul Brasile.”',
    verBrasil: 'Vedi tutte le opere del Brasile →',
    chamadaSobre: 'In molti momenti della mia vita, quando mi sono mancate le parole, le strade e perfino le forze, l’arte è rimasta.',
    lerTexto: 'Leggi il testo di Ana →',
    fotoSobreAlt: 'Ana Quintanas che dipinge al cavalletto, controluce alla finestra',
  },
  obras: {
    titulo: 'Opere',
    descricao:
      'I dipinti di Ana Quintanas: Brasile, fiori e nature morte, ritratto e altri luoghi. Ogni opera indica se è disponibile o venduta.',
    intro:
      'Possono essere paesaggi, città, case, natura, semplici scene quotidiane, colori, contrasti o luoghi che custodiscono una storia.',
    todas: 'Tutte',
    disponiveis: 'Disponibili',
    vendidas: 'Vendute',
    todosTemas: 'Tutti i temi',
    grupoSituacao: 'Stato',
    grupoTema: 'Tema',
    mostrandoUma: '1 opera mostrata',
    mostrandoVarias: '{n} opere mostrate',
    vazio: 'Nessuna opera con questa combinazione. Prova un altro tema.',
  },
  obra: {
    trilha: 'Sei qui',
    sobreObra: 'Sull’opera',
    tecnica: 'Tecnica',
    dimensoes: 'Dimensioni',
    ano: 'Anno',
    tema: 'Tema',
    certificadoForte: 'Opera originale',
    certificadoResto: ', accompagnata da un certificato di autenticità firmato dall’artista.',
    vendidaNota: 'Quest’opera è già stata venduta, ma Ana può raccontarti di più su di essa e sul suo lavoro.',
    notaWhats: 'La conversazione continua sul WhatsApp di Ana.',
    verDisponiveis: 'Vedi le opere disponibili',
    noInstagram: 'Su Instagram',
    verNoInstagram: 'Vedi quest’opera su Instagram',
    maisFotos: 'Altre foto dell’opera',
    outras: 'Altre opere',
    maisTema: (t) => `Altre — ${t}`,
    outrasObras: 'Altre opere',
    verTodas: 'Vedi tutte →',
    pintura: 'dipinto di Ana Quintanas',
    statusDisponivel: 'Opera disponibile.',
    statusVendida: 'Opera venduta.',
  },
  consultar: {
    botao: 'Chiedi il prezzo',
    leitor: (t) => ` di “${t}” sul WhatsApp di Ana (si apre in una nuova scheda)`,
  },
  whatsapp: {
    ola: 'Ciao Ana! Ti ho trovata tramite il tuo sito.',
    disponivel: (t) => `Ciao Ana! Ho visto l’opera "${t}" sul tuo sito e vorrei sapere il prezzo e avere più informazioni.`,
    vendida: (t) =>
      `Ciao Ana! Ho visto l’opera "${t}" sul tuo sito. So che è già stata venduta, ma vorrei sapere i prezzi e avere più informazioni sul tuo lavoro.`,
  },
  videos: {
    titulo: 'Opere in video',
    sobrancelha: 'Nello studio',
    intro: 'Il processo pittorico, dallo studio di luce e ombra ai colori, direttamente dall’Instagram di Ana.',
    descricao: 'Video di Ana Quintanas mentre dipinge: studi di luce e ombra, il processo di ogni tela e la vita dello studio.',
    verVideo: 'Guarda il video su Instagram',
    mais: 'Altri video su Instagram',
    emBreve: 'Presto.',
  },
  sobre: {
    descricao:
      'Ana Quintanas, artista visiva e pittrice brasiliana. Dipinge dal 2015, con una pittura legata al naturalismo e aperta a linguaggi e stili diversi.',
    fotoAlt:
      'Ana Quintanas in salopette di jeans, seduta nello studio accanto al quadro Hibiscos sul cavalletto; sullo sfondo, altri suoi dipinti sulla mensola',
    legendaAntes: 'Nello studio, accanto a',
    paragrafos: [
      'Sono Ana Quintanas, artista visiva e pittrice brasiliana. Ho iniziato il mio percorso nella pittura nel 2015 e, da allora, ho costruito la mia formazione attraverso corsi, esperienze con diversi artisti e la pratica, esplorando tecniche e possibilità per trovare la mia espressione.',
      'Sono figlia di Anilfa Quintanas Morais e Julio Morais. Sono cresciuta in una famiglia che, pur con un percorso segnato da difficoltà, ha sempre trovato spazio per incoraggiare la mia creatività. Quel sostegno fa parte della mia storia e di chi sono diventata.',
      'La mia pittura ha un legame con il naturalismo, ma si apre anche a linguaggi e stili diversi. Mi piace esplorare colori, paesaggi ed elementi che mi toccano, lasciando che le mie esperienze e il mio sguardo siano presenti in ogni opera.',
      'Oggi condivido la vita con mio marito Felipe e nostro figlio Benício. Tra la pittura, la maternità e la famiglia, continuo a costruire il mio percorso, imparando e trovando nuovi significati in ciò che faccio.',
      'In molti momenti della mia vita, quando mi sono mancate le parole, le strade e perfino le forze, l’arte è rimasta. E forse è per questo che oggi ho un così grande desiderio di condividerla con gli altri.',
    ],
    citacao:
      '“Mi piace esplorare colori, paesaggi ed elementi che mi toccano, lasciando che le mie esperienze e il mio sguardo siano presenti in ogni opera.”',
    fotosAtelie: [
      'Ana che dipinge il centro di un ibisco rosso sulla tela',
      'La mano di Ana che tiene il pennello vicino alla tela, nella luce calda del pomeriggio',
      'Ana seduta al cavalletto, che dipinge controluce alla finestra',
    ],
    janelaAlt: 'Ana Quintanas sorridente, appoggiata alla cornice dipinta di Janela para a Toscana',
  },
  contato: {
    titulo: 'Contatti',
    texto: 'Vuoi saperne di più su un’opera disponibile? Parla direttamente con Ana.',
    certificado: 'Ogni opera è originale e accompagnata da un certificato di autenticità firmato dall’artista.',
    retratoAlt: 'Ritratto di Ana Quintanas sorridente, con gli occhiali, nello studio',
  },
  naoEncontrada: {
    titulo: 'Questa pagina non esiste.',
    texto: 'Forse l’opera ha cambiato nome. Tutti i dipinti sono nella galleria.',
    botao: 'Vedi le opere',
  },
};

const zh: Textos = {
  menu: { obras: '作品', videos: '视频', sobre: '关于', contato: '联系', pular: '跳到正文', idioma: '语言' },
  selo: { disponivel: '可售', vendida: '已售' },
  temas: { brasil: '巴西', flores: '花卉与静物', retrato: '肖像', fora: '其他地方' },
  tecnicas: { 'Óleo sobre tela': '布面油画', 'Acrílico sobre tela': '布面丙烯' },
  legendasFotos: { 'Com a artista': '与艺术家', 'Na parede': '挂在墙上', 'No ateliê': '在画室' },
  profissao: '巴西画家',
  rodapeDireitos: '所有图片均为艺术家的作品',
  novaAba: '（在新标签页打开）',
  meta: {
    titulo: '安娜·金塔纳斯（Ana Quintanas）— 巴西画家',
    descricao: '巴西造型艺术家、画家安娜·金塔纳斯的作品集。地方、故事与记忆：她眼中的风景、房屋与自然。',
  },
  inicio: {
    frase: '我画打动我的事物：',
    fraseDestaque: '地方、故事与记忆。',
    paragrafo: '在风景、房屋与自然之间，每一件作品都承载着我的一点目光和我的故事。在这里，我与你分享这些画作。',
    verObras: '浏览作品',
    sobreAna: '关于安娜',
    fotoAlt: '安娜·金塔纳斯微笑着坐在画室里，身后是画作《Hibiscos》',
    legendaAntes: '安娜·金塔纳斯在画室，身后是',
    dispSobrancelha: '画室现有',
    dispTitulo: '可售作品',
    verDisponiveis: '查看全部可售作品 →',
    brasilCitacao: '“我的作品并不局限于单一主题，但有一样东西将一切联系在一起：我眼中的巴西。”',
    verBrasil: '查看全部巴西主题作品 →',
    chamadaSobre: '在人生的许多时刻，当我失去言语、方向，甚至力量时，艺术始终都在。',
    lerTexto: '阅读安娜的自述 →',
    fotoSobreAlt: '安娜·金塔纳斯在窗边逆光中对着画架作画',
  },
  obras: {
    titulo: '作品',
    descricao: '安娜·金塔纳斯的画作：巴西、花卉与静物、肖像及其他地方。每件作品都标明可售或已售。',
    intro: '可以是风景、城市、房屋、自然、日常的简单场景、色彩、对比，或是承载着历史的地方。',
    todas: '全部',
    disponiveis: '可售',
    vendidas: '已售',
    todosTemas: '全部主题',
    grupoSituacao: '状态',
    grupoTema: '主题',
    mostrandoUma: '显示 1 件作品',
    mostrandoVarias: '显示 {n} 件作品',
    vazio: '没有符合该组合的作品，请尝试其他主题。',
  },
  obra: {
    trilha: '当前位置',
    sobreObra: '关于作品',
    tecnica: '技法',
    dimensoes: '尺寸',
    ano: '年份',
    tema: '主题',
    certificadoForte: '原创作品',
    certificadoResto: '，附有艺术家亲笔签名的真品证书。',
    vendidaNota: '这件作品已售出，但安娜可以向你介绍更多关于它以及她的创作。',
    notaWhats: '将通过安娜的 WhatsApp 继续沟通。',
    verDisponiveis: '查看可售作品',
    noInstagram: 'Instagram 上',
    verNoInstagram: '在 Instagram 上查看这件作品',
    maisFotos: '作品的更多照片',
    outras: '其他作品',
    maisTema: (t) => `更多 — ${t}`,
    outrasObras: '其他作品',
    verTodas: '查看全部 →',
    pintura: '安娜·金塔纳斯画作',
    statusDisponivel: '可售。',
    statusVendida: '已售。',
  },
  consultar: {
    botao: '咨询价格',
    leitor: (t) => `：《${t}》，通过安娜的 WhatsApp（在新标签页打开）`,
  },
  whatsapp: {
    ola: '你好，安娜！我是通过你的网站找到你的。',
    disponivel: (t) => `你好，安娜！我在你的网站上看到了作品《${t}》，想了解价格和更多信息。`,
    vendida: (t) => `你好，安娜！我在你的网站上看到了作品《${t}》。我知道它已经售出，但想了解价格以及你作品的更多信息。`,
  },
  videos: {
    titulo: '作品视频',
    sobrancelha: '画室里',
    intro: '从光影习作到上色的绘画过程，直接来自安娜的 Instagram。',
    descricao: '安娜·金塔纳斯的作画视频：光影习作、每幅画的创作过程与画室日常。',
    verVideo: '在 Instagram 上观看视频',
    mais: '在 Instagram 上看更多视频',
    emBreve: '即将推出。',
  },
  sobre: {
    descricao: '巴西造型艺术家、画家安娜·金塔纳斯。自2015年起作画，作品根植于自然主义，同时向不同的语言与风格敞开。',
    fotoAlt: '身穿牛仔背带裤的安娜·金塔纳斯坐在画室里，旁边的画架上是画作《Hibiscos》，背景架子上摆着她的其他画作',
    legendaAntes: '在画室，旁边是',
    paragrafos: [
      '我是安娜·金塔纳斯（Ana Quintanas），一名巴西造型艺术家和画家。我于2015年开始绘画之路，此后通过课程、与不同艺术家的交流以及不断的实践来充实自己，探索各种技法与可能，寻找属于自己的表达。',
      '我的父母是阿妮尔法·金塔纳斯·莫赖斯（Anilfa Quintanas Morais）和朱利奥·莫赖斯（Julio Morais）。我成长的家庭虽然历经坎坷，却始终为我的创造力留出空间、给予鼓励。这份支持是我故事的一部分，也塑造了今天的我。',
      '我的绘画与自然主义有着联系，同时也向不同的语言和风格敞开。我喜欢探索打动我的色彩、风景和元素，让我的经历和我的目光留在每一件作品之中。',
      '如今，我与丈夫费利佩（Felipe）和儿子贝尼西奥（Benício）共同生活。在绘画、母职与家庭之间，我继续走着自己的路，不断学习，也为所做的事找到新的意义。',
      '在人生的许多时刻，当我失去言语、方向，甚至力量时，艺术始终都在。也许正因如此，今天的我如此渴望与他人分享它。',
    ],
    citacao: '“我喜欢探索打动我的色彩、风景和元素，让我的经历和我的目光留在每一件作品之中。”',
    fotosAtelie: [
      '安娜在画布上描绘一朵红色扶桑花的花心',
      '安娜握笔靠近画布的手，沐浴在午后温暖的光线中',
      '安娜坐在画架前，在窗边逆光中作画',
    ],
    janelaAlt: '安娜·金塔纳斯微笑着倚在画作《Janela para a Toscana》所绘的窗框旁',
  },
  contato: {
    titulo: '联系',
    texto: '想进一步了解可售作品？请直接联系安娜。',
    certificado: '每件作品均为原作，并附有艺术家亲笔签名的真品证书。',
    retratoAlt: '戴着眼镜、面带微笑的安娜·金塔纳斯在画室的肖像',
  },
  naoEncontrada: {
    titulo: '此页面不存在。',
    texto: '作品可能已更名。所有画作都在作品页中。',
    botao: '浏览作品',
  },
};

export const TEXTOS: Record<Idioma, Textos> = { pt, en, es, fr, it, zh };

export function t(lang: Idioma): Textos {
  return TEXTOS[lang];
}
