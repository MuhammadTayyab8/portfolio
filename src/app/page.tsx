import React from 'react'
import styles from './page.module.css'
import Hero from '@/components/Hero'
import Image from 'next/image'
import { About } from '@/components/About'
import python from '../../public/python.svg'
import js from '../../public/javascript.svg'
import ts from '../../public/typescript.svg'
import next from '../../public/next js.svg'
import html from '../../public/html.svg'
import css from '../../public/css.svg'
import react from '../../public/react.svg'
import portfolio from '../../public/portfolio.png'
import Footer from '@/components/footer'
import website from '../../public/WhatsApp Image 2024-11-10 at 5.36.33 PM (1).jpeg'
import app from '../../public/WhatsApp Image 2024-11-10 at 5.36.33 PM.jpeg'
import { Mission } from '@/components/mission'
import comming from '../../public/Screenshot 2024-11-10 180740.png'
import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <div className={styles.skill}>
        <div className={styles.heading}>
          <h1>Expertise</h1>
          <p>Here is Some Of My Skills and expertise</p>
        </div>
        <div className={styles.expertise}>
            <Image src={python} alt='python' className={styles.skillImg} />
            <Image src={js} alt='python' className={styles.skillImg} />
            <Image src={ts} alt='python' className={styles.skillImg} />
            <Image src={next} alt='python' className={styles.skillImg} />
            <Image src={html} alt='python' className={styles.skillImg} />
            <Image src={react} alt='python' className={styles.skillImg} />
            <Image src={css} alt='python' className={styles.skillImg} />
        </div>
      </div>

      <div className={styles.portfolio}>
        <h1>Portfolio</h1>
        <p>Here Is Some Of My Porfolio Items</p>

        <div className={styles.items}>
        <div className={styles.portfolioItems}>
          <Image src={portfolio}  alt='portdolio' className={styles.portImg}/>
        
         <div className={styles.content}>
          <h2>Resume Builder</h2>
          <p>This resume builder is built on HTML, CSS and Typescript</p>
          <button > <Link href='https://dynamic-resume-builder-ashy-five.vercel.app/'>Check Here</Link> </button>
          </div>
        </div>
        <div className={styles.portfolioItems}>
          <Image src={website}  alt='portdolio' className={styles.portImg}/>
        
         <div className={styles.content}>
         <h2>Explore Ease Website</h2>
         <p>Developed version will be live soon stay connected!</p>
          <button> <Link href='https://www.behance.net/gallery/211311359/Travel-Website-UI-design'> Check Here</Link></button>
          </div>
        </div>
        <div className={styles.portfolioItems}>
          <Image src={app}  alt='portdolio' className={styles.portImg}/>
        
         <div className={styles.content}>
          <h2>Explore Ease App</h2>
          <p>Explore Ease App UI design in Figma</p>
          <button > <Link href='https://www.behance.net/gallery/211296313/Travel-Mobile-App-UI-design'> Check Here</Link></button>
          </div>
        </div>
        <div className={styles.portfolioItems}>
          <Image src={comming}  alt='portdolio' className={styles.portImg}/>
        
         <div className={styles.content}>
          <h2>Raw Juice Website</h2>
          <p>Stay Connected!</p>
          <button >Comming...</button>
          </div>
        </div>
        </div>
      </div>

      <Mission/>
    </div>
  )
}

export default Home