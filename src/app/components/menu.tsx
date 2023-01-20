import Link from "next/link";
import Logo from "./logo";
import styles from "./menu.module.css";

export default function Menu() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/about" className={styles.link}>
          About
        </Link>
        <Link href="/">
          <Logo className={styles.logo} />
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact
        </Link>
        <Link href="/shop" className={styles.link}>
          Shop
        </Link>
      </div>
    </header>
  );
}
