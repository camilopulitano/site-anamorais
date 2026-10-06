/**
 * Tradução dos textos das obras (descrição da imagem e "Sobre a obra"),
 * das fotos extras e das legendas dos vídeos.
 *
 * Os títulos das obras ficam no original em português em todas as línguas.
 * Português vem direto de src/content/obras.ts; aqui ficam só as outras.
 * O build falha se faltar a tradução de alguma obra, foto ou vídeo.
 */
import { OUTROS, type Idioma } from './idiomas';
import { obras, type Obra } from '../content/obras';
import { videos } from '../content/videos';

type Outro = Exclude<Idioma, 'pt'>;
type TextoObra = { alt: string; sobre: string };

const OBRAS: Record<Outro, Record<string, TextoObra>> = {
  en: {
    'morro-colorido': {
      alt: 'Hillside with stacked colorful houses, power lines and laundry on the line; a boy walks down the stairs and the Dois Irmãos peak appears in the background',
      sobre: 'Houses stacked up the hillside, wires crossing the sky and laundry on the line: everyday life in a Rio de Janeiro community painted with color and respect. Below, a boy walks down the stairs; in the background, the Dois Irmãos peak closes the landscape.',
    },
    'rua-de-pedra': {
      alt: 'Stone street in a colonial town, white houses with yellow trim and green windows, a cactus and woods, blue mountains in the background',
      sobre: 'A stone street between white houses with yellow trim, in a colonial townscape that seems to have stopped in time. The cactus, the woods and the blue mountains in the background bring the Brazilian countryside into the scene.',
    },
    'capela-a-beira-mar': {
      alt: 'White colonial chapel with green windows on a beach of turquoise water, among coconut palms, with two boats anchored on the right',
      sobre: 'A white chapel with green windows on the edge of a turquoise beach, surrounded by coconut palms. The anchored boats and the reflection on the water give the painting the calm of a morning on the Brazilian coast.',
    },
    'ipe-amarelo': {
      alt: 'Yellow ipê tree in bloom over a white colonial house with green doors, blue sky',
      sobre: 'The yellow ipê in full bloom covers a colonial house with green doors. One of the most Brazilian images there is, painted against a very blue sky.',
    },
    hibiscos: {
      alt: 'Two red hibiscus flowers among green foliage',
      sobre: 'Two open red hibiscus flowers among green leaves. The painting brings the eye so close to the flower it can almost touch it, with attention to the folds of the petals and the pollen.',
    },
    'casa-azul': {
      alt: 'House with a blue and white façade, number 920, with white shutters, potted plants and a Portuguese-stone sidewalk in black and white waves under a sunset sky',
      sobre: 'The blue and white façade of house number 920, with shutters, potted plants and the Portuguese-stone sidewalk in waves. The sunset sky warms the scene and brings out every detail of the architecture.',
    },
    'diptico-do-mar': {
      alt: 'Diptych: two vertical canvases side by side showing the turquoise sea from above, light foam breaking on the rocks and a small boat leaving a wake',
      sobre: 'Two canvases that form a single landscape: the sea seen from above, in dense blues and greens, with foam breaking on the rocks and a small boat making its way. The brushwork is looser and more gestural than in the rest of the collection.',
    },
    'cataratas-do-iguacu': {
      alt: 'Iguaçu Falls, waterfalls amid the forest',
      sobre: 'The Iguaçu Falls amid the forest, with the force of the water and the mist rising from the river. A landscape painted up close, surrounded by the green of the rainforest.',
    },
    retrato: {
      alt: 'Portrait of a woman with dark curly hair and a pink blouse',
      sobre: 'Portrait of a woman with dark curly hair and a direct gaze. The skin, the light and the serene expression show Ana’s attention to the human figure.',
    },
    'araras-azuis': {
      alt: 'A pair of hyacinth macaws with yellow eyes',
      sobre: 'A pair of hyacinth macaws side by side, their yellow eyes standing out. The intense blue of the feathers and the closeness between the two birds give the painting a tender tone.',
    },
    'largo-da-igreja': {
      alt: 'Colonial houses, with a yellow house with blue windows in front of a white and ochre church',
      sobre: 'A yellow house with blue windows in front of a white and ochre church, on the square of a historic town. The interplay of colors in the colonial houses is the heart of the composition.',
    },
    'casa-amarela': {
      alt: 'Yellow house with stairs, potted plants and foliage in the foreground',
      sobre: 'A yellow house with stairs, potted plants and foliage in the foreground. A simple everyday scene, bathed in light, the kind we see without really noticing.',
    },
    'natureza-morta-com-frutas': {
      alt: 'Still life with grapes, figs, peaches, watermelon and a glass on a table',
      sobre: 'Grapes, figs, peaches, watermelon and a glass on the table, in a still life of warm colors against a dark background. The painting works on the shine, texture and volume of each fruit.',
    },
    canion: {
      alt: 'Canyon walls covered in forest under a blue sky',
      sobre: 'The walls of a canyon covered in forest, seen from afar under a blue sky. The scale of the landscape and the light on the rock show the grandeur of Brazilian nature.',
    },
    araucarias: {
      alt: 'Araucaria trees on golden hills with bluish mountains in the background',
      sobre: 'Araucaria trees on golden hills, with bluish mountain ranges in the background. The tree that symbolizes southern Brazil stands in the foreground, in a warm, open light.',
    },
    'rosas-brancas': {
      alt: 'White and pink roses in a gold vase painted with flowers',
      sobre: 'White and pink roses in a gold vase painted with flowers. A delicate still life, with soft light and a warm background.',
    },
    'primavera-na-rua': {
      alt: 'Stone street between colonial houses under a bougainvillea in bloom',
      sobre: 'A stone street between colonial houses, under a bougainvillea in bloom. The red of the flowers contrasts with the white façades and leads the eye up the street.',
    },
    'gato-na-janela': {
      alt: 'Black cat on the windowsill looking at the garden, next to a blue vase with flowers',
      sobre: 'A black cat on the windowsill, looking at the garden, next to a blue vase with flowers. The light coming through the window gives the scene the feel of a quiet afternoon at home.',
    },
    ladeira: {
      alt: 'Steep stone street between white and yellow houses, with a church tower',
      sobre: 'A steep stone street between white and yellow houses, with the church tower in the background. The perspective draws the eye upward, like someone walking up through the town.',
    },
    'sobrado-e-charrete': {
      alt: 'Two-story colonial house with blue windows, a horse-drawn carriage in the street and a red bougainvillea',
      sobre: 'A two-story colonial house with blue windows, a horse-drawn carriage on the stone street and a red bougainvillea on the corner. A scene reminiscent of Brazil’s historic towns.',
    },
    'janela-para-a-toscana': {
      alt: 'Wooden window open onto Tuscan fields with cypress trees',
      sobre: 'A wooden window open onto the fields of Tuscany, with cypresses and a path through the vegetation. The window frame invites the viewer to step into the landscape.',
    },
    'vale-verde': {
      alt: 'Green valley with hills, trees and a red-roofed barn',
      sobre: 'A valley of green hills, trees and a red-roofed barn, under a light mist. A peaceful landscape, painted in soft shades of green.',
    },
    'campo-dourado': {
      alt: 'Golden field with shrubs and woods in the background',
      sobre: 'A golden field with shrubs and woods in the background, bathed in warm light. The painting is built in layers of yellow, green and ochre.',
    },
    'terraco-na-toscana': {
      alt: 'Terrace with a table, wine and bread overlooking vineyards in Tuscany',
      sobre: 'A terrace with a table, wine and bread overlooking the vineyards of Tuscany, framed by plants and stone. An invitation to sit down and take in the landscape.',
    },
    'campo-de-lavanda': {
      alt: 'Lavender field with cypresses and a house in the background',
      sobre: 'Rows of lavender in bloom, with cypresses and a house in the background. The purple of the field and the green of the cypresses make this one of the most colorful paintings in the collection.',
    },
  },

  es: {
    'morro-colorido': {
      alt: 'Cerro con casas coloridas apiladas, cables eléctricos y ropa tendida; un niño baja la escalera y el morro Dois Irmãos aparece al fondo',
      sobre: 'Casas apiladas cerro arriba, cables que cruzan el cielo y ropa tendida: la vida cotidiana de una comunidad de Río de Janeiro pintada con color y respeto. Abajo, un niño baja la escalera; al fondo, el morro Dois Irmãos cierra el paisaje.',
    },
    'rua-de-pedra': {
      alt: 'Calle empedrada en un pueblo colonial, casas blancas con zócalo amarillo y ventanas verdes, un cactus y vegetación, montañas azules al fondo',
      sobre: 'Una calle empedrada entre casas blancas de zócalo amarillo, en un caserío colonial que parece detenido en el tiempo. El cactus, la vegetación y las montañas azules al fondo traen el interior de Brasil a la escena.',
    },
    'capela-a-beira-mar': {
      alt: 'Capilla colonial blanca de ventanas verdes en una playa de agua turquesa, entre cocoteros, con dos barcos anclados a la derecha',
      sobre: 'Una capilla blanca de ventanas verdes a orillas de una playa de agua turquesa, rodeada de cocoteros. Los barcos anclados y el reflejo en el agua dan al cuadro la calma de una mañana en la costa brasileña.',
    },
    'ipe-amarelo': {
      alt: 'Ipê amarillo en flor sobre una casa colonial blanca de puertas verdes, cielo azul',
      sobre: 'El ipê amarillo en plena floración cubre una casa colonial de puertas verdes. Una de las imágenes más brasileñas que existen, pintada contra un cielo muy azul.',
    },
    hibiscos: {
      alt: 'Dos hibiscos rojos entre follaje verde',
      sobre: 'Dos hibiscos rojos abiertos entre hojas verdes. El cuadro acerca la mirada a la flor hasta casi tocarla, con atención a los pliegues de los pétalos y al polen.',
    },
    'casa-azul': {
      alt: 'Casa de fachada azul y blanca, número 920, con persianas blancas, macetas con plantas y acera de piedra portuguesa en ondas blancas y negras bajo un cielo de atardecer',
      sobre: 'La fachada azul y blanca de una casa con el número 920, con persianas, macetas con plantas y la acera de piedra portuguesa en ondas. El cielo del atardecer calienta la escena y resalta cada detalle de la arquitectura.',
    },
    'diptico-do-mar': {
      alt: 'Díptico: dos lienzos verticales uno al lado del otro con el mar turquesa visto desde arriba, espuma clara rompiendo en las rocas y un pequeño barco dejando estela',
      sobre: 'Dos lienzos que forman un solo paisaje: el mar visto desde arriba, en azules y verdes densos, con la espuma rompiendo en las rocas y un pequeño barco abriéndose paso. La pincelada es más suelta y gestual que en el resto de la colección.',
    },
    'cataratas-do-iguacu': {
      alt: 'Cataratas del Iguazú, saltos de agua entre la selva',
      sobre: 'Los saltos de las Cataratas del Iguazú entre la selva, con la fuerza del agua y la bruma que sube del río. Un paisaje pintado de cerca, con el verde de la selva alrededor.',
    },
    retrato: {
      alt: 'Retrato de una mujer de cabello rizado oscuro y blusa rosa',
      sobre: 'Retrato de una mujer de cabello rizado oscuro y mirada directa. La piel, la luz y la expresión serena muestran la atención de Ana a la figura humana.',
    },
    'araras-azuis': {
      alt: 'Pareja de guacamayos azules de ojos amarillos',
      sobre: 'Una pareja de guacamayos azules uno junto al otro, con los ojos amarillos destacados. El azul intenso de las plumas y la cercanía entre las dos aves dan al cuadro un tono de afecto.',
    },
    'largo-da-igreja': {
      alt: 'Caserío colonial con una casa amarilla de ventanas azules frente a una iglesia blanca y ocre',
      sobre: 'Una casa amarilla de ventanas azules frente a una iglesia blanca y ocre, en la plaza de un pueblo histórico. El juego de colores del caserío colonial es el centro de la composición.',
    },
    'casa-amarela': {
      alt: 'Casa amarilla con escalera, macetas con plantas y follaje en primer plano',
      sobre: 'Una casa amarilla con escalera, macetas con plantas y follaje en primer plano. Una escena sencilla de todos los días, bañada de luz, de esas que vemos sin fijarnos.',
    },
    'natureza-morta-com-frutas': {
      alt: 'Naturaleza muerta con uvas, higos, duraznos, sandía y una copa sobre la mesa',
      sobre: 'Uvas, higos, duraznos, sandía y una copa sobre la mesa, en una naturaleza muerta de colores cálidos y fondo oscuro. El cuadro trabaja el brillo, la textura y el volumen de cada fruta.',
    },
    canion: {
      alt: 'Paredes de un cañón cubiertas de vegetación bajo un cielo azul',
      sobre: 'Las paredes de un cañón cubiertas de vegetación, vistas desde lejos bajo un cielo azul. La escala del paisaje y la luz sobre la roca muestran la grandeza de la naturaleza brasileña.',
    },
    araucarias: {
      alt: 'Araucarias sobre colinas doradas con sierras azuladas al fondo',
      sobre: 'Araucarias sobre colinas doradas, con sierras azuladas al fondo. El árbol símbolo del sur de Brasil aparece en primer plano, con una luz cálida y abierta.',
    },
    'rosas-brancas': {
      alt: 'Rosas blancas y rosadas en un jarrón dorado pintado con flores',
      sobre: 'Rosas blancas y rosadas en un jarrón dorado pintado con flores. Una naturaleza muerta delicada, de luz suave y fondo cálido.',
    },
    'primavera-na-rua': {
      alt: 'Calle empedrada entre casas coloniales bajo una buganvilla en flor',
      sobre: 'Una calle empedrada entre casas coloniales, bajo una buganvilla en flor. El rojo de las flores contrasta con el blanco de las fachadas y lleva la mirada calle arriba.',
    },
    'gato-na-janela': {
      alt: 'Gato negro en el alféizar mirando el jardín, junto a un jarrón azul con flores',
      sobre: 'Un gato negro en el alféizar, mirando el jardín, junto a un jarrón azul con flores. La luz que entra por la ventana da a la escena el aire de una tarde tranquila en casa.',
    },
    ladeira: {
      alt: 'Cuesta empedrada entre casonas blancas y amarillas con la torre de una iglesia',
      sobre: 'Una cuesta empedrada entre casonas blancas y amarillas, con la torre de la iglesia al fondo. La perspectiva lleva la mirada hacia lo alto, como quien sube la ciudad a pie.',
    },
    'sobrado-e-charrete': {
      alt: 'Casona colonial de dos plantas con ventanas azules, un carruaje en la calle y una buganvilla roja',
      sobre: 'Una casona colonial de ventanas azules, con un carruaje en la calle empedrada y una buganvilla roja en la esquina. Una escena que recuerda a los pueblos históricos de Brasil.',
    },
    'janela-para-a-toscana': {
      alt: 'Ventana de madera abierta a los campos de la Toscana con cipreses',
      sobre: 'Una ventana de madera abierta a los campos de la Toscana, con cipreses y un camino entre la vegetación. El marco de la ventana invita a quien mira a entrar en el paisaje.',
    },
    'vale-verde': {
      alt: 'Valle verde con colinas, árboles y un galpón de techo rojo',
      sobre: 'Un valle de colinas verdes, árboles y un galpón de techo rojo, bajo una bruma ligera. Un paisaje tranquilo, pintado en suaves tonos de verde.',
    },
    'campo-dourado': {
      alt: 'Campo dorado con arbustos y bosque al fondo',
      sobre: 'Un campo dorado con arbustos y bosque al fondo, bañado de luz cálida. El cuadro está construido en capas de amarillo, verde y ocre.',
    },
    'terraco-na-toscana': {
      alt: 'Terraza con mesa, vino y pan frente a viñedos en la Toscana',
      sobre: 'Una terraza con mesa, vino y pan frente a los viñedos de la Toscana, enmarcada por plantas y piedra. Una invitación a sentarse y contemplar el paisaje.',
    },
    'campo-de-lavanda': {
      alt: 'Campo de lavanda con cipreses y una casa al fondo',
      sobre: 'Hileras de lavanda en flor, con cipreses y una casa al fondo. El morado del campo y el verde de los cipreses hacen de este uno de los cuadros más coloridos de la colección.',
    },
  },

  fr: {
    'morro-colorido': {
      alt: 'Colline couverte de maisons colorées empilées, de fils électriques et de linge étendu ; un garçon descend l’escalier et le morro Dois Irmãos apparaît au fond',
      sobre: 'Des maisons empilées à flanc de colline, des fils qui traversent le ciel et du linge qui sèche : le quotidien d’une communauté de Rio de Janeiro peint avec couleur et respect. En bas, un garçon descend l’escalier ; au fond, le morro Dois Irmãos ferme le paysage.',
    },
    'rua-de-pedra': {
      alt: 'Rue pavée dans une ville coloniale, maisons blanches à soubassement jaune et fenêtres vertes, un cactus et de la végétation, montagnes bleues au fond',
      sobre: 'Une rue pavée entre des maisons blanches à soubassement jaune, dans un ensemble colonial qui semble arrêté dans le temps. Le cactus, la végétation et les montagnes bleues au fond font entrer l’intérieur du Brésil dans la scène.',
    },
    'capela-a-beira-mar': {
      alt: 'Chapelle coloniale blanche aux fenêtres vertes sur une plage d’eau turquoise, entre les cocotiers, avec deux bateaux ancrés à droite',
      sobre: 'Une chapelle blanche aux fenêtres vertes au bord d’une plage d’eau turquoise, entourée de cocotiers. Les bateaux à l’ancre et le reflet sur l’eau donnent au tableau le calme d’un matin sur la côte brésilienne.',
    },
    'ipe-amarelo': {
      alt: 'Ipê jaune en fleurs au-dessus d’une maison coloniale blanche aux portes vertes, ciel bleu',
      sobre: 'L’ipê jaune en pleine floraison recouvre une maison coloniale aux portes vertes. L’une des images les plus brésiliennes qui soient, peinte sur un ciel très bleu.',
    },
    hibiscos: {
      alt: 'Deux hibiscus rouges dans un feuillage vert',
      sobre: 'Deux hibiscus rouges épanouis entre des feuilles vertes. Le tableau rapproche le regard de la fleur jusqu’à presque la toucher, attentif aux plis des pétales et au pollen.',
    },
    'casa-azul': {
      alt: 'Maison à façade bleue et blanche, numéro 920, aux persiennes blanches, avec des plantes en pot et un trottoir en pavés portugais formant des vagues noires et blanches sous un ciel de fin de journée',
      sobre: 'La façade bleue et blanche d’une maison au numéro 920, avec ses persiennes, ses plantes en pot et son trottoir en pavés portugais dessinant des vagues. Le ciel du soir réchauffe la scène et fait ressortir chaque détail de l’architecture.',
    },
    'diptico-do-mar': {
      alt: 'Diptyque : deux toiles verticales côte à côte montrant la mer turquoise vue d’en haut, l’écume claire contre les rochers et un petit bateau laissant un sillage',
      sobre: 'Deux toiles qui forment un seul paysage : la mer vue d’en haut, en bleus et verts denses, avec l’écume contre les rochers et un petit bateau qui trace son chemin. La touche est plus libre et plus gestuelle que dans le reste de l’ensemble.',
    },
    'cataratas-do-iguacu': {
      alt: 'Chutes d’Iguaçu, cascades au milieu de la forêt',
      sobre: 'Les chutes d’Iguaçu au milieu de la forêt, avec la force de l’eau et la brume qui monte de la rivière. Un paysage peint de près, entouré du vert de la forêt.',
    },
    retrato: {
      alt: 'Portrait d’une femme aux cheveux bouclés foncés et au chemisier rose',
      sobre: 'Portrait d’une femme aux cheveux bouclés foncés et au regard direct. La peau, la lumière et l’expression sereine montrent l’attention d’Ana à la figure humaine.',
    },
    'araras-azuis': {
      alt: 'Couple d’aras hyacinthe aux yeux jaunes',
      sobre: 'Un couple d’aras hyacinthe côte à côte, aux yeux jaunes bien marqués. Le bleu intense des plumes et la proximité des deux oiseaux donnent au tableau une note de tendresse.',
    },
    'largo-da-igreja': {
      alt: 'Maisons coloniales, avec une maison jaune aux fenêtres bleues devant une église blanche et ocre',
      sobre: 'Une maison jaune aux fenêtres bleues devant une église blanche et ocre, sur la place d’une ville historique. Le jeu de couleurs des maisons coloniales est au cœur de la composition.',
    },
    'casa-amarela': {
      alt: 'Maison jaune avec escalier, plantes en pot et feuillage au premier plan',
      sobre: 'Une maison jaune avec un escalier, des plantes en pot et du feuillage au premier plan. Une scène simple du quotidien, baignée de lumière, de celles qu’on voit sans vraiment les remarquer.',
    },
    'natureza-morta-com-frutas': {
      alt: 'Nature morte avec raisins, figues, pêches, pastèque et un verre sur une table',
      sobre: 'Raisins, figues, pêches, pastèque et un verre sur la table, dans une nature morte aux couleurs chaudes sur fond sombre. Le tableau travaille l’éclat, la texture et le volume de chaque fruit.',
    },
    canion: {
      alt: 'Parois d’un canyon couvertes de forêt sous un ciel bleu',
      sobre: 'Les parois d’un canyon couvertes de forêt, vues de loin sous un ciel bleu. L’échelle du paysage et la lumière sur la roche montrent la grandeur de la nature brésilienne.',
    },
    araucarias: {
      alt: 'Araucarias sur des collines dorées avec des montagnes bleutées au fond',
      sobre: 'Des araucarias sur des collines dorées, avec des montagnes bleutées au fond. L’arbre emblème du sud du Brésil apparaît au premier plan, dans une lumière chaude et ouverte.',
    },
    'rosas-brancas': {
      alt: 'Roses blanches et rosées dans un vase doré peint de fleurs',
      sobre: 'Des roses blanches et rosées dans un vase doré peint de fleurs. Une nature morte délicate, à la lumière douce et au fond chaud.',
    },
    'primavera-na-rua': {
      alt: 'Rue pavée entre des maisons coloniales sous un bougainvillier en fleurs',
      sobre: 'Une rue pavée entre des maisons coloniales, sous un bougainvillier en fleurs. Le rouge des fleurs contraste avec le blanc des façades et guide le regard vers le haut de la rue.',
    },
    'gato-na-janela': {
      alt: 'Chat noir sur le rebord de la fenêtre regardant le jardin, à côté d’un vase bleu avec des fleurs',
      sobre: 'Un chat noir sur le rebord de la fenêtre, qui regarde le jardin, à côté d’un vase bleu fleuri. La lumière qui entre par la fenêtre donne à la scène l’air d’un après-midi tranquille à la maison.',
    },
    ladeira: {
      alt: 'Rue pavée en pente entre des maisons blanches et jaunes, avec un clocher d’église',
      sobre: 'Une rue pavée en pente entre des maisons blanches et jaunes, avec le clocher de l’église au fond. La perspective entraîne le regard vers le haut, comme si l’on montait la ville à pied.',
    },
    'sobrado-e-charrete': {
      alt: 'Maison coloniale à étage aux fenêtres bleues, avec une calèche dans la rue et un bougainvillier rouge',
      sobre: 'Une maison coloniale à étage aux fenêtres bleues, avec une calèche dans la rue pavée et un bougainvillier rouge au coin. Une scène qui rappelle les villes historiques du Brésil.',
    },
    'janela-para-a-toscana': {
      alt: 'Fenêtre en bois ouverte sur les champs de Toscane avec des cyprès',
      sobre: 'Une fenêtre en bois ouverte sur les champs de Toscane, avec des cyprès et un chemin dans la végétation. Le cadre de la fenêtre invite le regard à entrer dans le paysage.',
    },
    'vale-verde': {
      alt: 'Vallée verte avec des collines, des arbres et une grange au toit rouge',
      sobre: 'Une vallée de collines vertes, d’arbres et une grange au toit rouge, sous une légère brume. Un paysage paisible, peint dans de doux tons de vert.',
    },
    'campo-dourado': {
      alt: 'Champ doré avec des arbustes et un bois au fond',
      sobre: 'Un champ doré avec des arbustes et un bois au fond, baigné de lumière chaude. Le tableau est construit par couches de jaune, de vert et d’ocre.',
    },
    'terraco-na-toscana': {
      alt: 'Terrasse avec une table, du vin et du pain face aux vignes de Toscane',
      sobre: 'Une terrasse avec une table, du vin et du pain face aux vignes de Toscane, encadrée de plantes et de pierre. Une invitation à s’asseoir et à contempler le paysage.',
    },
    'campo-de-lavanda': {
      alt: 'Champ de lavande avec des cyprès et une maison au fond',
      sobre: 'Des rangées de lavande en fleurs, avec des cyprès et une maison au fond. Le violet du champ et le vert des cyprès en font l’un des tableaux les plus colorés de l’ensemble.',
    },
  },

  it: {
    'morro-colorido': {
      alt: 'Collina con case colorate ammassate, fili elettrici e panni stesi; un bambino scende la scalinata e sullo sfondo appare il morro Dois Irmãos',
      sobre: 'Case ammassate su per la collina, fili che attraversano il cielo e panni stesi: la vita quotidiana di una comunità di Rio de Janeiro dipinta con colore e rispetto. In basso, un bambino scende la scalinata; sullo sfondo, il morro Dois Irmãos chiude il paesaggio.',
    },
    'rua-de-pedra': {
      alt: 'Strada di pietra in una cittadina coloniale, case bianche con zoccolo giallo e finestre verdi, un cactus e la vegetazione, montagne azzurre sullo sfondo',
      sobre: 'Una strada di pietra tra case bianche con lo zoccolo giallo, in un borgo coloniale che sembra fermo nel tempo. Il cactus, la vegetazione e le montagne azzurre sullo sfondo portano nella scena l’entroterra del Brasile.',
    },
    'capela-a-beira-mar': {
      alt: 'Cappella coloniale bianca con finestre verdi su una spiaggia dall’acqua turchese, tra le palme da cocco, con due barche ancorate a destra',
      sobre: 'Una cappella bianca con finestre verdi sulla riva di una spiaggia dall’acqua turchese, circondata da palme da cocco. Le barche all’ancora e il riflesso sull’acqua danno al quadro la calma di una mattina sulla costa brasiliana.',
    },
    'ipe-amarelo': {
      alt: 'Ipê giallo in fiore sopra una casa coloniale bianca con porte verdi, cielo azzurro',
      sobre: 'L’ipê giallo in piena fioritura copre una casa coloniale con le porte verdi. Una delle immagini più brasiliane che esistano, dipinta contro un cielo azzurrissimo.',
    },
    hibiscos: {
      alt: 'Due ibischi rossi tra il fogliame verde',
      sobre: 'Due ibischi rossi aperti tra foglie verdi. Il quadro avvicina lo sguardo al fiore fin quasi a toccarlo, con attenzione alle pieghe dei petali e al polline.',
    },
    'casa-azul': {
      alt: 'Casa con facciata azzurra e bianca, numero 920, con persiane bianche, vasi di piante e marciapiede in pietra portoghese a onde bianche e nere sotto un cielo al tramonto',
      sobre: 'La facciata azzurra e bianca di una casa al numero 920, con le persiane, i vasi di piante e il marciapiede in pietra portoghese a onde. Il cielo del tramonto scalda la scena e fa risaltare ogni dettaglio dell’architettura.',
    },
    'diptico-do-mar': {
      alt: 'Dittico: due tele verticali affiancate con il mare turchese visto dall’alto, la schiuma chiara che si infrange sugli scogli e una piccola barca che lascia una scia',
      sobre: 'Due tele che formano un unico paesaggio: il mare visto dall’alto, in blu e verdi densi, con la schiuma che si infrange sugli scogli e una piccola barca che si apre la strada. La pennellata è più libera e gestuale rispetto al resto della collezione.',
    },
    'cataratas-do-iguacu': {
      alt: 'Cascate dell’Iguaçu, salti d’acqua tra la foresta',
      sobre: 'I salti delle Cascate dell’Iguaçu tra la foresta, con la forza dell’acqua e la nebbia che sale dal fiume. Un paesaggio dipinto da vicino, con il verde della foresta tutto intorno.',
    },
    retrato: {
      alt: 'Ritratto di donna con capelli ricci scuri e camicetta rosa',
      sobre: 'Ritratto di una donna dai capelli ricci scuri e dallo sguardo diretto. La pelle, la luce e l’espressione serena mostrano l’attenzione di Ana per la figura umana.',
    },
    'araras-azuis': {
      alt: 'Coppia di are giacinto dagli occhi gialli',
      sobre: 'Una coppia di are giacinto una accanto all’altra, con gli occhi gialli in risalto. Il blu intenso delle piume e la vicinanza tra i due uccelli danno al quadro un tono affettuoso.',
    },
    'largo-da-igreja': {
      alt: 'Case coloniali, con una casa gialla dalle finestre blu davanti a una chiesa bianca e ocra',
      sobre: 'Una casa gialla dalle finestre blu davanti a una chiesa bianca e ocra, nella piazza di una città storica. Il gioco di colori delle case coloniali è il centro della composizione.',
    },
    'casa-amarela': {
      alt: 'Casa gialla con scala, vasi di piante e fogliame in primo piano',
      sobre: 'Una casa gialla con la scala, vasi di piante e fogliame in primo piano. Una semplice scena quotidiana, inondata di luce, di quelle che vediamo senza farci caso.',
    },
    'natureza-morta-com-frutas': {
      alt: 'Natura morta con uva, fichi, pesche, anguria e un calice sul tavolo',
      sobre: 'Uva, fichi, pesche, anguria e un calice sul tavolo, in una natura morta dai colori caldi e dal fondo scuro. Il quadro lavora la lucentezza, la consistenza e il volume di ogni frutto.',
    },
    canion: {
      alt: 'Pareti di un canyon coperte di vegetazione sotto un cielo azzurro',
      sobre: 'Le pareti di un canyon coperte di vegetazione, viste da lontano sotto un cielo azzurro. La scala del paesaggio e la luce sulla roccia mostrano la grandiosità della natura brasiliana.',
    },
    araucarias: {
      alt: 'Araucarie su colline dorate con catene montuose azzurrate sullo sfondo',
      sobre: 'Araucarie su colline dorate, con catene montuose azzurrate sullo sfondo. L’albero simbolo del Sud del Brasile appare in primo piano, in una luce calda e aperta.',
    },
    'rosas-brancas': {
      alt: 'Rose bianche e rosate in un vaso dorato dipinto a fiori',
      sobre: 'Rose bianche e rosate in un vaso dorato dipinto a fiori. Una natura morta delicata, dalla luce morbida e dal fondo caldo.',
    },
    'primavera-na-rua': {
      alt: 'Strada di pietra tra case coloniali sotto una bouganville fiorita',
      sobre: 'Una strada di pietra tra case coloniali, sotto una bouganville in fiore. Il rosso dei fiori contrasta con il bianco delle facciate e conduce lo sguardo su per la strada.',
    },
    'gato-na-janela': {
      alt: 'Gatto nero sul davanzale che guarda il giardino, accanto a un vaso blu con fiori',
      sobre: 'Un gatto nero sul davanzale, che guarda il giardino, accanto a un vaso blu con fiori. La luce che entra dalla finestra dà alla scena l’aria di un pomeriggio tranquillo in casa.',
    },
    ladeira: {
      alt: 'Salita di pietra tra case bianche e gialle con il campanile di una chiesa',
      sobre: 'Una salita di pietra tra case bianche e gialle, con il campanile della chiesa sullo sfondo. La prospettiva porta lo sguardo verso l’alto, come chi risale la città a piedi.',
    },
    'sobrado-e-charrete': {
      alt: 'Palazzina coloniale a due piani con finestre blu, una carrozza nella strada e una bouganville rossa',
      sobre: 'Una palazzina coloniale con finestre blu, una carrozza sulla strada di pietra e una bouganville rossa all’angolo. Una scena che ricorda le città storiche del Brasile.',
    },
    'janela-para-a-toscana': {
      alt: 'Finestra di legno aperta sui campi della Toscana con cipressi',
      sobre: 'Una finestra di legno aperta sui campi della Toscana, con cipressi e un sentiero tra la vegetazione. La cornice della finestra invita chi guarda a entrare nel paesaggio.',
    },
    'vale-verde': {
      alt: 'Valle verde con colline, alberi e un fienile dal tetto rosso',
      sobre: 'Una valle di colline verdi, alberi e un fienile dal tetto rosso, sotto una leggera foschia. Un paesaggio tranquillo, dipinto in tenui toni di verde.',
    },
    'campo-dourado': {
      alt: 'Campo dorato con arbusti e bosco sullo sfondo',
      sobre: 'Un campo dorato con arbusti e bosco sullo sfondo, inondato di luce calda. Il quadro è costruito a strati di giallo, verde e ocra.',
    },
    'terraco-na-toscana': {
      alt: 'Terrazza con tavolo, vino e pane davanti ai vigneti della Toscana',
      sobre: 'Una terrazza con tavolo, vino e pane davanti ai vigneti della Toscana, incorniciata da piante e pietra. Un invito a sedersi e guardare il paesaggio.',
    },
    'campo-de-lavanda': {
      alt: 'Campo di lavanda con cipressi e una casa sullo sfondo',
      sobre: 'Filari di lavanda in fiore, con cipressi e una casa sullo sfondo. Il viola del campo e il verde dei cipressi ne fanno uno dei quadri più colorati della collezione.',
    },
  },

  zh: {
    'morro-colorido': {
      alt: '山坡上层层叠起的彩色房屋、电线和晾衣绳上的衣服；一个男孩走下台阶，远处是双兄弟山',
      sobre: '房屋沿着山坡层层叠起，电线划过天空，衣服晾在绳上：里约热内卢一个社区的日常，以色彩与敬意画出。下方，一个男孩走下台阶；远处，双兄弟山为画面收尾。',
    },
    'rua-de-pedra': {
      alt: '殖民时期小镇的石板街，白墙黄色墙裙、绿色窗户的房屋，仙人掌与树林，远处是蓝色群山',
      sobre: '白墙黄墙裙的房屋之间，一条石板街穿过仿佛停留在旧时光里的殖民建筑群。仙人掌、树林和远处的蓝色群山，把巴西内陆的风景带进了画中。',
    },
    'capela-a-beira-mar': {
      alt: '绿松石色海水的海滩上，一座绿窗白墙的殖民时期小教堂立在椰子树间，右侧停泊着两艘船',
      sobre: '一座绿窗白墙的小教堂坐落在绿松石色海水的海滩边，四周是椰子树。停泊的小船和水中的倒影，让画面带着巴西海岸清晨的宁静。',
    },
    'ipe-amarelo': {
      alt: '盛开的黄色风铃木覆盖着一座绿门白墙的殖民时期房屋，蓝天',
      sobre: '盛开的黄色风铃木覆盖着一座绿门的殖民时期房屋。这是最具巴西特色的画面之一，衬着一片湛蓝的天空。',
    },
    hibiscos: {
      alt: '绿叶间的两朵红色扶桑花',
      sobre: '两朵盛开的红色扶桑花在绿叶之间。画面把目光拉近到几乎可以触碰花朵，细致描绘花瓣的褶皱和花粉。',
    },
    'casa-azul': {
      alt: '蓝白相间外墙的920号房子，白色百叶窗，盆栽植物，黑白波浪图案的葡萄牙石铺人行道，傍晚的天空',
      sobre: '920号房子蓝白相间的外墙，配着百叶窗、盆栽和波浪图案的葡萄牙石铺人行道。傍晚的天空让画面变得温暖，也凸显了建筑的每一个细节。',
    },
    'diptico-do-mar': {
      alt: '双联画：两幅竖向画布并排，从高处俯瞰的绿松石色大海，白色浪花拍打礁石，一艘小船划出尾迹',
      sobre: '两幅画布组成一整片风景：从高处俯瞰的大海，蓝绿色浓郁，浪花拍打着礁石，一艘小船破浪前行。笔触比其他作品更加自由奔放。',
    },
    'cataratas-do-iguacu': {
      alt: '伊瓜苏瀑布，林间的瀑布群',
      sobre: '伊瓜苏瀑布在雨林之间奔流，水势磅礴，河面升起水雾。这是一幅近距离描绘的风景，四周环绕着森林的绿色。',
    },
    retrato: {
      alt: '深色卷发、粉色上衣的女性肖像',
      sobre: '一位深色卷发、目光直视的女性肖像。肌肤、光线和平静的神情，体现了安娜对人物的细致观察。',
    },
    'araras-azuis': {
      alt: '一对黄眼睛的紫蓝金刚鹦鹉',
      sobre: '一对紫蓝金刚鹦鹉并肩而立，黄色的眼睛十分醒目。羽毛浓烈的蓝色和两只鸟之间的亲近，让画面充满温情。',
    },
    'largo-da-igreja': {
      alt: '殖民时期建筑群中，一座蓝窗黄房子位于一座白色与赭色相间的教堂前',
      sobre: '在一座历史小城的广场上，一栋蓝窗的黄色房子立在白色与赭色相间的教堂前。殖民建筑的色彩对比是整幅构图的中心。',
    },
    'casa-amarela': {
      alt: '带楼梯的黄色房子，前景是盆栽和枝叶',
      sobre: '一栋带楼梯的黄色房子，前景是盆栽和枝叶。一个洒满阳光的寻常场景，是我们常常看见却未曾留意的那种。',
    },
    'natureza-morta-com-frutas': {
      alt: '桌上有葡萄、无花果、桃子、西瓜和酒杯的静物画',
      sobre: '桌上的葡萄、无花果、桃子、西瓜和一只酒杯，构成一幅暖色调、深色背景的静物画。画面着力表现每种水果的光泽、质感和体积。',
    },
    canion: {
      alt: '蓝天下覆盖着植被的峡谷峭壁',
      sobre: '覆盖着植被的峡谷峭壁，在蓝天下远远望去。风景的尺度和岩石上的光线，展现出巴西自然的壮阔。',
    },
    araucarias: {
      alt: '金色山丘上的南洋杉，远处是泛蓝的山脉',
      sobre: '金色山丘上的南洋杉，远处是泛蓝的山脉。这种象征巴西南部的树木立在前景中，沐浴在温暖开阔的光线里。',
    },
    'rosas-brancas': {
      alt: '绘有花朵的金色花瓶中的白色和粉色玫瑰',
      sobre: '绘有花朵的金色花瓶里插着白色和粉色的玫瑰。一幅细腻的静物画，光线柔和，背景温暖。',
    },
    'primavera-na-rua': {
      alt: '盛开的三角梅下，殖民时期房屋之间的石板街',
      sobre: '盛开的三角梅下，一条石板街穿过殖民时期的房屋。花朵的红色与白色外墙形成对比，引导目光沿街而上。',
    },
    'gato-na-janela': {
      alt: '窗台上的黑猫望着花园，旁边是插着花的蓝色花瓶',
      sobre: '一只黑猫在窗台上望着花园，旁边是插着花的蓝色花瓶。从窗外照进来的光线，让画面像一个在家里度过的安静午后。',
    },
    ladeira: {
      alt: '白色和黄色老房子之间的石板坡道，远处有教堂钟楼',
      sobre: '一条石板坡道穿过白色和黄色的老房子，远处是教堂的钟楼。透视把目光引向高处，仿佛步行登上这座小城。',
    },
    'sobrado-e-charrete': {
      alt: '蓝色窗户的两层殖民时期楼房，街上有一辆马车，还有红色三角梅',
      sobre: '一栋蓝窗的两层殖民时期楼房，石板街上停着一辆马车，街角开着红色三角梅。这一幕让人想起巴西的历史名城。',
    },
    'janela-para-a-toscana': {
      alt: '向托斯卡纳田野敞开的木窗，窗外有柏树',
      sobre: '一扇木窗向托斯卡纳的田野敞开，窗外有柏树和穿过植被的小路。窗框邀请观者走进这片风景。',
    },
    'vale-verde': {
      alt: '有山丘、树木和一座红顶谷仓的绿色山谷',
      sobre: '绿色山丘、树木和一座红顶谷仓组成的山谷，笼罩在薄雾之中。一幅宁静的风景，用柔和的绿色调描绘。',
    },
    'campo-dourado': {
      alt: '金色田野，有灌木，远处是树林',
      sobre: '金色的田野上有灌木，远处是树林，沐浴在温暖的光线里。画面由黄色、绿色和赭色层层构成。',
    },
    'terraco-na-toscana': {
      alt: '托斯卡纳葡萄园前的露台，桌上有葡萄酒和面包',
      sobre: '托斯卡纳葡萄园前的露台，桌上摆着葡萄酒和面包，四周是植物和石头。邀请人坐下来，静静欣赏风景。',
    },
    'campo-de-lavanda': {
      alt: '薰衣草田，有柏树，远处有一栋房子',
      sobre: '一排排盛开的薰衣草，柏树和远处的一栋房子。田野的紫色和柏树的绿色，使它成为整个作品集中色彩最丰富的画作之一。',
    },
  },
};

/** Descrição das fotos extras, pelo nome do arquivo. */
const FOTOS: Record<Outro, Record<string, string>> = {
  en: {
    'capela-a-beira-mar-com-a-ana': 'Ana Quintanas, wearing an apron, holding the painting Praia de Carneiros in the studio',
    'canion-com-a-ana': 'Ana Quintanas, in a painting apron, holding the painting Cânion and smiling at it',
    'sobrado-e-charrete-com-a-ana': 'Ana Quintanas smiling and holding the painting Sobrado e charrete in a room with lit lamps',
    'terraco-na-toscana-com-a-ana': 'Ana Quintanas, in a red dress, next to the painting Terraço na Toscana, which is almost as tall as she is',
    'diptico-do-mar-na-parede': 'The two canvases of Díptico do mar hanging side by side on a wooden wall',
    'diptico-do-mar-no-atelie': 'The two canvases of Díptico do mar resting on the studio floor, under lit lamps',
  },
  es: {
    'capela-a-beira-mar-com-a-ana': 'Ana Quintanas, con delantal, sosteniendo el cuadro Praia de Carneiros en el taller',
    'canion-com-a-ana': 'Ana Quintanas, con delantal de pintura, sosteniendo el cuadro Cânion y sonriéndole',
    'sobrado-e-charrete-com-a-ana': 'Ana Quintanas sonriendo y sosteniendo el cuadro Sobrado e charrete en una sala con lámparas encendidas',
    'terraco-na-toscana-com-a-ana': 'Ana Quintanas, con vestido rojo, junto al cuadro Terraço na Toscana, que es casi de su altura',
    'diptico-do-mar-na-parede': 'Los dos lienzos del Díptico do mar colgados uno al lado del otro en una pared de madera',
    'diptico-do-mar-no-atelie': 'Los dos lienzos del Díptico do mar apoyados en el suelo del taller, bajo lámparas encendidas',
  },
  fr: {
    'capela-a-beira-mar-com-a-ana': 'Ana Quintanas, en tablier, tenant le tableau Praia de Carneiros dans l’atelier',
    'canion-com-a-ana': 'Ana Quintanas, en tablier de peinture, tenant le tableau Cânion et lui souriant',
    'sobrado-e-charrete-com-a-ana': 'Ana Quintanas souriante, tenant le tableau Sobrado e charrete dans une pièce aux lampes allumées',
    'terraco-na-toscana-com-a-ana': 'Ana Quintanas, en robe rouge, à côté du tableau Terraço na Toscana, presque aussi grand qu’elle',
    'diptico-do-mar-na-parede': 'Les deux toiles du Díptico do mar accrochées côte à côte sur un mur en bois',
    'diptico-do-mar-no-atelie': 'Les deux toiles du Díptico do mar posées au sol de l’atelier, sous des lampes allumées',
  },
  it: {
    'capela-a-beira-mar-com-a-ana': 'Ana Quintanas, con il grembiule, tiene in mano il quadro Praia de Carneiros nello studio',
    'canion-com-a-ana': 'Ana Quintanas, con il grembiule da pittura, tiene il quadro Cânion e gli sorride',
    'sobrado-e-charrete-com-a-ana': 'Ana Quintanas sorridente con il quadro Sobrado e charrete in una stanza dalle lampade accese',
    'terraco-na-toscana-com-a-ana': 'Ana Quintanas, in abito rosso, accanto al quadro Terraço na Toscana, alto quasi quanto lei',
    'diptico-do-mar-na-parede': 'Le due tele del Díptico do mar appese una accanto all’altra su una parete di legno',
    'diptico-do-mar-no-atelie': 'Le due tele del Díptico do mar appoggiate sul pavimento dello studio, sotto le lampade accese',
  },
  zh: {
    'capela-a-beira-mar-com-a-ana': '安娜·金塔纳斯系着围裙，在画室里手捧画作《Praia de Carneiros》',
    'canion-com-a-ana': '安娜·金塔纳斯系着画画用的围裙，手捧画作《Cânion》，对着它微笑',
    'sobrado-e-charrete-com-a-ana': '安娜·金塔纳斯微笑着，在亮着灯的房间里手捧画作《Sobrado e charrete》',
    'terraco-na-toscana-com-a-ana': '身穿红裙的安娜·金塔纳斯站在画作《Terraço na Toscana》旁，画几乎和她一样高',
    'diptico-do-mar-na-parede': '《Díptico do mar》的两幅画布并排挂在木墙上',
    'diptico-do-mar-no-atelie': '《Díptico do mar》的两幅画布靠放在画室地上，上方亮着灯',
  },
};

/** Legendas dos vídeos, pelo código do Reels (o trecho depois de /reel/). */
const VIDEOS: Record<Outro, Record<string, string>> = {
  en: {
    DTDHINqEw3M:
      'Frida. One of my favorite works. Frida is a synonym for strength and authenticity. She inspires because she turned pain into art, vulnerability into power.',
    DdoWAkdzGZg: 'It is a study I make to understand light and shadow before applying the colors.',
    DcD4x8oTv2R: 'Practice, focus and a good playlist.',
  },
  es: {
    DTDHINqEw3M:
      'Frida. Una de mis obras preferidas. Frida es sinónimo de fuerza y autenticidad. Inspira porque transformó el dolor en arte, la vulnerabilidad en potencia.',
    DdoWAkdzGZg: 'Es un estudio que hago para entender la luz y la sombra antes de aplicar los colores.',
    DcD4x8oTv2R: 'Práctica, concentración y una buena playlist.',
  },
  fr: {
    DTDHINqEw3M:
      'Frida. L’une de mes œuvres préférées. Frida est synonyme de force et d’authenticité. Elle inspire parce qu’elle a transformé la douleur en art, la vulnérabilité en puissance.',
    DdoWAkdzGZg: 'C’est une étude que je fais pour comprendre la lumière et l’ombre avant d’appliquer les couleurs.',
    DcD4x8oTv2R: 'Entraînement, concentration et une bonne playlist.',
  },
  it: {
    DTDHINqEw3M:
      'Frida. Una delle mie opere preferite. Frida è sinonimo di forza e autenticità. Ispira perché ha trasformato il dolore in arte, la vulnerabilità in potenza.',
    DdoWAkdzGZg: 'È uno studio che faccio per capire la luce e l’ombra prima di stendere i colori.',
    DcD4x8oTv2R: 'Allenamento, concentrazione e una buona playlist.',
  },
  zh: {
    DTDHINqEw3M: '弗里达。我最喜欢的作品之一。弗里达是力量与真实的代名词。她之所以激励人心，是因为她把痛苦化为艺术，把脆弱化为力量。',
    DdoWAkdzGZg: '这是我在上色之前所做的习作，用来理解光与影。',
    DcD4x8oTv2R: '练习、专注，再加一份好歌单。',
  },
};

export function codigoDoVideo(url: string): string {
  return url.match(/\/(?:reel|p|tv)\/([^/?#]+)/)?.[1] ?? url;
}

/** Falha no build se faltar alguma tradução. */
function validar(): void {
  for (const lang of OUTROS) {
    for (const obra of obras) {
      const t = OBRAS[lang][obra.slug];
      if (!t?.alt || (obra.sobre && !t.sobre)) throw new Error(`[i18n] falta a tradução (${lang}) da obra ${obra.slug}`);
      for (const f of obra.fotos ?? []) {
        if (!FOTOS[lang][f.arquivo]) throw new Error(`[i18n] falta a tradução (${lang}) da foto ${f.arquivo}`);
      }
    }
    for (const v of videos) {
      if (!VIDEOS[lang][codigoDoVideo(v.url)]) throw new Error(`[i18n] falta a tradução (${lang}) do vídeo ${v.url}`);
    }
  }
}
validar();

export function altDaObra(obra: Obra, lang: Idioma): string {
  return lang === 'pt' ? obra.alt : OBRAS[lang][obra.slug].alt;
}

export function sobreDaObra(obra: Obra, lang: Idioma): string | undefined {
  if (!obra.sobre) return undefined;
  return lang === 'pt' ? obra.sobre : OBRAS[lang][obra.slug].sobre;
}

export function altDaFoto(arquivo: string, altPt: string, lang: Idioma): string {
  return lang === 'pt' ? altPt : FOTOS[lang][arquivo];
}

export function legendaDoVideo(url: string, legendaPt: string, lang: Idioma): string {
  return lang === 'pt' ? legendaPt : VIDEOS[lang][codigoDoVideo(url)];
}
