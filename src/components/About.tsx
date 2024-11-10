import React from 'react'
import styles from '../app/page.module.css'
import Image from 'next/image'
import Section from '../../public/about.webp'

export const About = () => {
  return (
    <div>
        <div className={styles.about}>
  <div className={styles.content}>
<h1>Muhammad Tayyab</h1>
<h4>Student At GIAIC </h4>
<p>I am a Frontend Web Developer with strong expertise in HTML, CSS, Next.js and TypeScript, committed to crafting responsive websites that deliver exceptional user experiences. With a keen eye for design and a solid foundation in UI/UX principles, I strive to create intuitive and visually appealing interfaces. My approach blends thoughtful user research with innovative design to ensure that every project I undertake not only meets the functional needs of the users but also delights them. Whether building for myself or for clients, my focus remains on delivering top-tier, user-centered design solutions.</p>
  </div>
  <div className={styles.img}>
<Image src={Section} alt='about-image'className={styles.aboutImage}/>
  </div>
</div>
    </div>
  )
}

