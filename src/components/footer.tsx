import React from 'react'
import Link from 'next/link'
import styles from '../app/page.module.css'

const footer = () => {
  return (
    <div>
        <div className={styles.footer}>
        <div className={styles.pages}>
        <Link href="/"><h1>Portfolio</h1></Link>
        <h4>Muhammad Tayyab</h4>
        <p>Student At Giaic</p>
        </div>
            <div className={styles.pages}>
                <h3>Pages</h3>
                <p>Home</p>
                <p>Portfolio</p>
                <p>About</p>
                <p>Contact</p>
            </div>
            <div className={styles.pages}>
                <h3>Informations</h3>
                <p>Linkedin : www.linkedin.com</p>
                <p>Linkedin : www.linkedin.com</p>
                <p>Linkedin : www.linkedin.com</p>
            </div>
            <div className={styles.pages}>
                <h3>Skills</h3>
                <p>Web Development</p>
                <p>UI UX designing</p>
            </div>
        </div>
    </div>
  )
}

export default footer