'use client'

import { useLanguage } from '../../languages/language-context'
import { Anybody } from 'next/font/google'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Counter from '../../component/counter/counter'
import styles from './about.module.css'
import Image from 'next/image'

const anybody = Anybody({ subsets: ['latin'] })

export default function AboutUs() {
    const { getString } = useLanguage()

    const items = [
        {
            text: getString('projects-completed'),
            number: 500,
        },
        {
            text: getString('years-of-experience'),
            number: 10,
        },
        {
            text: getString('trustworthy-partners'),
            number: 50,
        },
        {
            text: getString('positive-testimonials'),
            number: 900,
        },
    ]

    return (
        <>
            <motion.div
                className={styles.section}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ease: 'easeInOut', staggerChildren: 0.2 }}
                id="who-we-are"
            >
                <div className={styles.aboutUsTitle}>{getString('about-us')}</div>
                <div className={`${styles.aboutUsSubtitle} ${anybody.className}`}>{getString('who-we-are')}</div>
                <div className={styles.aboutUsDescription}>{getString('about-us-subtitle')}</div>
            </motion.div>
            <div className={`${styles.section} ${styles.gray}`}>
                <div className={styles.numbersContainer}>
                    <div className={styles.numbersPics}>
                        <Image src="/photos/about_img.webp" alt="rigging stage" width={540} height={540} />
                    </div>
                    <div className={styles.numbersText}>
                        <div className={styles.numbersTitle}>{getString('trust-in-our')}</div>
                        <div className={styles.numbersSubtitle}>{getString('for-over-a-decade')}</div>
                        <div className={styles.numbersGrid}>
                            {items.map((item, index) => (
                                <Counter key={index} text={item.text} numbers={item.number} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
