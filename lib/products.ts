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
  ritual: string;
  price: number;
  size: string;
  image: string;
}

export const products: Product[] = [
  {
    slug: "hair-oil",
    index: "01",
    name: "HAIR OIL",
    family: "Hair & Scalp",
    descriptor: "Botanical · Slow-Infused",
    description: "Botanical hair & scalp oil",
    longDescription:
      "The classic Indian champi, composed with modern restraint. Amla, bhringraj and brahmi are slow-steeped in cold-pressed sesame and virgin coconut oils, then matured in small batches. Massaged into the scalp, it leaves hair soft, glossy and faintly green with botanicals.",
    notes: {
      top: "Green botanical · soft coconut",
      heart: "Amla · bhringraj · brahmi",
      base: "Cold-pressed sesame · virgin coconut",
    },
    ritual:
      "Warm a few drops between the palms. Part the hair and work the oil into the scalp with slow, circular motions, drawing the excess through to the ends. Leave for an hour — or overnight — before washing.",
    price: 1850,
    size: "100 ml",
    image: "/images/pranore/pranore-hair-oil.jpg",
  },
  {
    slug: "body-oil",
    index: "02",
    name: "BODY OIL",
    family: "Body & Massage",
    descriptor: "Nourishing · Grounding",
    description: "Nourishing body massage oil",
    longDescription:
      "An abhyanga-inspired massage oil: vetiver, ashwagandha and Mysore sandalwood slow-steeped in cold-pressed sesame. It glides warmly, absorbs cleanly, and leaves skin supple with a quiet, grounding scent — the close of the day, bottled.",
    notes: {
      top: "Warm sesame · soft spice",
      heart: "Vetiver · ashwagandha · sandalwood",
      base: "Cold-pressed sesame · sweet almond",
    },
    ritual:
      "Warm between the palms and massage into skin in long, upward strokes — the classical abhyanga. Best after bathing, while the skin is still damp, taking a few unhurried minutes.",
    price: 2150,
    size: "100 ml",
    image: "/images/pranore/pranore-body-oil.jpg",
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
    name: "AMLA",
    origin: "Emblica officinalis · Uttar Pradesh",
    product: "hair-oil",
  },
  {
    index: "02",
    name: "BHRINGRAJ",
    origin: "Eclipta alba · Rajasthan",
    product: "hair-oil",
  },
  {
    index: "03",
    name: "BRAHMI",
    origin: "Bacopa monnieri · Himalayan foothills",
    product: "hair-oil",
  },
  {
    index: "04",
    name: "SESAME",
    origin: "Sesamum indicum · cold-pressed · Gujarat",
    product: "body-oil",
  },
  {
    index: "05",
    name: "VETIVER",
    origin: "Chrysopogon zizanioides · Kerala",
    product: "body-oil",
  },
];
