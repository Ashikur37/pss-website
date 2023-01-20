import Image, { StaticImageData } from "next/image";
import tablePic from "../../public/table.jpg";
import Logo from "./components/logo";
import ProductCard from "./components/product-card";
import styles from "./page.module.css";

export type ProductCardRecord = {
  title: string;
  description: string;
  alt: string;
  image: StaticImageData;
  price: string;
};

const cards: ProductCardRecord[] = [
  {
    title: "Polymer Clay Earrings",
    description: "Handmade polymer clay earring kits.",
    alt: "Photograph of a pair of polymer clay earrings",
    image: tablePic,
    price: "R650",
  },
  {
    title: "Polymer Clay Earrings",
    description: "Handmade polymer clay earring kits.",
    alt: "Photograph of a pair of polymer clay earrings",
    image: tablePic,
    price: "R650",
  },
  {
    title: "Polymer Clay Earrings",
    description: "Handmade polymer clay earring kits.",
    alt: "Photograph of a pair of polymer clay earrings",
    image: tablePic,
    price: "R650",
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.heroContainer}>
        <Logo className={styles.heroLogo} />
        <h1 className={styles.heroTitle}>Pretty Stuff Studio</h1>
        <Image
          src={tablePic}
          alt="Photograph of a table displaying arts and crafts"
          className={styles.heroImage}
          fill
        />
      </div>
      <h2 className={styles.sectionHeader}>Our Products & Services</h2>
      <div className={styles.cardContainer}>
        {cards.map((card) => (
          <ProductCard key={card.title} {...card}></ProductCard>
        ))}
      </div>
    </main>
  );
}
