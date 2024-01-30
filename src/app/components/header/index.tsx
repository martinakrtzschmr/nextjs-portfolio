import React from 'react';
import styles from '../../styles/header/header.module.scss';

const Header = () => {
  // Component logic goes here

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <nav className={styles.navbar}>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Resume</a>
            </li>
            <li>
              <a>Works</a>
            </li>
            <li>
              <a>Contact me</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
