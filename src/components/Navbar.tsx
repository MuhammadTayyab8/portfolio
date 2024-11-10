'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../app/page.module.css';

const Navbar = () => {

  const [toggleMenu, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!toggleMenu);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLogo}>
        <Link href="/">Portfolio</Link>
      </div>
      <div className={styles.hamburger} onClick={handleMenuToggle}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
      <ul className={`${styles.navMenu} ${toggleMenu ? styles.active : ''}`}>
        <li className={styles.navItem}>
          <Link href="/" className={styles.navLink}>Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about" className={styles.navLink}>About</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/project" className={styles.navLink}>Projects</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
