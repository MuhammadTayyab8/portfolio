'use client'

import React from 'react';
import styles from '../app/page.module.css';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Welcome to My Portfolio</h1>
        <p className={styles.subtitle}>Crafting beautiful designs and web experiences</p>
        <Link href="/about" className={styles.btn} >Learn More</Link>
      </div>
    </section>
  );
};

export default Hero;
