import React from 'react';
import styles from './page.module.css';
import variables from '../styles/variables.module.scss';

import Header from '../components/header';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <h1>Test</h1>
      <footer>© Copyright 2024 Martin Kretzschmar</footer>
    </main>
  );
}
