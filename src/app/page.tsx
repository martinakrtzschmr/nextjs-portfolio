import Image from "next/image";
import styles from "./page.module.css";
import variables from "./variables.module.scss";
 
export default function Home() {
  return (
    <main className={styles.main}>
      <header>Portfolio Website 2</header>
      <h1>Test</h1>
      <h1 style={{ color: variables.primaryColor }}>Hello, Next.js!</h1>
      <footer>© Copyright 2024 Martin Kretzschmar</footer>
    </main>
  );
}
