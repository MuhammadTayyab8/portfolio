import React from 'react'
import styles from '../app/page.module.css'
import Image from 'next/image'
import Section from '../../public/about.webp'

export const Mission = () => {
  return (
    <div>
<div className={styles.about}>
<div className={styles.img}>
<Image src={Section} alt='about-image'className={styles.aboutImage}/>
  </div>
  <div className={styles.content}>
<h1>My Mission</h1>
<h4>Future Goals</h4>
<p>After completing the course from GIAIC, my goal is to secure an internship or job where I can apply and enhance my skill set. I am dedicated to continuously learning about AI and its profound impact on the world. I aim to complete all the quarters of the course, pushing myself to achieve the best results and stay at the forefront of AI advancements. With a relentless commitment to growth, I will strive to contribute meaningfully and make a positive impact in the field.</p>
  </div>

</div>
    </div>
  )
}

