export interface Product {
  slug: string;
  index: string;
  name: string;
  family: string;
  descriptor: string;
  description: string;
  longDescription: string;
  notes: {
    top: string;
    heart: string;
    base: string;
  };
  price: number;
  size: string;
  image: string;
}

export const products: Product[] = [
  {
    slug: "mogra",
    index: "01",
    name: "MOGRA",
    family: "White Floral",
    descriptor: "Luminous · delicate",
    description: "White floral · luminous · delicate",
    longDescription:
      "Mogra — Indian jasmine — is gathered before dawn in the fields of Tamil Nadu, while the petals still hold their night fragrance. Pranore captures that first-hour bloom: a luminous white floral that opens soft, cool and radiant, then settles into a warm skin-memory of garlands and summer evenings.",
    notes: {
      top: "Green stem · bergamot",
      heart: "Mogra absolute · tuberose",
      base: "Soft musk · sandalwood",
    },
    price: 4800,
    size: "12 ml attar",
    image: "/images/pranore/pranore-mogra.jpg",
  },
  {
    slug: "sandalwood",
    index: "02",
    name: "SANDALWOOD",
    family: "Creamy Wood",
    descriptor: "Warm · meditative",
    description: "Creamy wood · warm · meditative",
    longDescription:
      "For over two thousand years, Mysore sandalwood has been the quiet heart of Indian perfumery — burned in temples, worn on skin, ground into paste for ritual. Our attar honours its meditative creaminess: smooth, milky, unhurried. A fragrance that behaves like a slow breath.",
    notes: {
      top: "Warm air · iris",
      heart: "Mysore sandalwood",
      base: "Amber · cedar · tonka",
    },
    price: 6900,
    size: "12 ml attar",
    image: "/images/pranore/pranore-sandalwood.jpg",
  },
  {
    slug: "vetiver",
    index: "03",
    name: "VETIVER",
    family: "Earth Green",
    descriptor: "Earthy · green · refined",
    description: "Earthy · green · refined",
    longDescription:
      "Vetiver is the root of calm — khus, cooled in water through Indian summers, woven into screens and mats. Pranore's vetiver attar is drawn from the dried roots of Kerala: dry, green and earthy at first, smoothing into a refined, smoky elegance that lingers like rain on warm earth.",
    notes: {
      top: "Grapefruit · green leaf",
      heart: "Haitian & Kerala vetiver",
      base: "Leather · smoked tea",
    },
    price: 5400,
    size: "12 ml attar",
    image: "/images/pranore/pranore-vetiver.jpg",
  },
  {
    slug: "oud",
    index: "04",
    name: "OUD",
    family: "Resinous Wood",
    descriptor: "Deep · resinous · mysterious",
    description: "Deep · resinous · mysterious",
    longDescription:
      "Oud is the most storied material in the perfumer's palette — resinous heartwood, dark and slow to reveal itself. Our composition pairs Indian oud with a whisper of rose and saffron, building a deep, mysterious attar that unfolds over hours rather than minutes. Not a fragrance you wear; one that wears you.",
    notes: {
      top: "Saffron · pink pepper",
      heart: "Assam oud · rose",
      base: "Labdanum · amber · moss",
    },
    price: 12500,
    size: "12 ml attar",
    image: "/images/pranore/pranore-oud.jpg",
  },
  {
    slug: "saffron",
    index: "05",
    name: "SAFFRON",
    family: "Warm Spice",
    descriptor: "Warm · spiced · opulent",
    description: "Warm · spiced · opulent",
    longDescription:
      "Each Pranore saffron attar carries the warmth of Kashmir's harvest — threads picked at dawn from the crocus field, leathery-sweet and glowing. Layered over amber and dark rose, it becomes an opulent, spiced composition: the scent of celebration, ceremony and marigold-drawn courtyards.",
    notes: {
      top: "Kashmiri saffron · cardamom",
      heart: "Dark rose · cinnamon",
      base: "Amber · vanilla · oud",
    },
    price: 8900,
    size: "12 ml attar",
    image: "/images/pranore/pranore-saffron.jpg",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(price: number): string {
  return `\u20B9${price.toLocaleString("en-IN")}`;
}

export const botanicals = [
  {
    index: "01",
    name: "MOGRA",
    origin: "Jasmine sambac · Tamil Nadu",
    product: "mogra",
  },
  {
    index: "02",
    name: "SANDALWOOD",
    origin: "Santalum album · Mysore",
    product: "sandalwood",
  },
  {
    index: "03",
    name: "VETIVER",
    origin: "Chrysopogon zizanioides · Kerala",
    product: "vetiver",
  },
  {
    index: "04",
    name: "SAFFRON",
    origin: "Crocus sativus · Kashmir",
    product: "saffron",
  },
  {
    index: "05",
    name: "OUD",
    origin: "Aquilaria · Assam",
    product: "oud",
  },
];
