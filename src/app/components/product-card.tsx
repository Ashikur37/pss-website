import Image from "next/image";
import Link from "next/link";
import { ProductCardRecord } from "../page";
import styles from "./product-card.module.css";

export default function ProductCard({
  title,
  description,
  image,
  price,
  alt,
}: ProductCardRecord) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src={image} alt={alt} fill />
      </div>
      <div className={styles.details}>
        <h2 className={styles.detailsHeader}>{title}</h2>
        <p className={styles.description}>
          {description}
          {' '}
          Starting from <span className={styles.price}>{price}</span>.
        </p>
        <Link href='#' className={styles.shopButton}>Shop Now</Link>
      </div>
    </div>
  );
}
