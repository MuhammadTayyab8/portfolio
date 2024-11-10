import React from 'react'
import styles from '../../app/page.module.css'
import Link from 'next/link'


const page = () => {
  return (
    <div>
        <div className={styles.contactinfo}>
            <h1>Contact Information</h1>
            <p>Stay Connected To my Social Media!</p>

            <h4>Linkedin : <Link href='https://www.linkedin.com/in/muhammad-tayyab-982a25290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>View Here</Link></h4>
            <h4>Github : <Link href='https://github.com/MuhammadTayyab8'>View Here</Link></h4>
            <h4>Behance : <Link href='https://www.behance.net/Mtayyabdesigner'>View Here</Link> </h4>
        </div>
    </div>
  )
}

export default page