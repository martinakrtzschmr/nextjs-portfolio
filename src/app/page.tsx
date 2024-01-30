import Link from 'next/link';
import React from 'react';
import styles from './page.module.css';
// import variables from '../styles/variables.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>NextJs Portfolio</h1>
      <Link href='/admin/users'>Users</Link>
      <Link href='/about'>About</Link>
      <Link href='/blog'>Blog</Link>
      <Link href='/contect'>Contact me</Link>
      <footer>© Copyright 2024 Martin Kretzschmar</footer>
    </main>
  );
}
