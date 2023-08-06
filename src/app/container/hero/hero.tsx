'use client'

import Image from 'next/image'
import styles from './hero.module.css'
import { useLanguage } from '../../languages/language-context'
import { Anybody } from 'next/font/google'
import CtaButton from '../../component/cta-button/cta-button'
import { motion } from 'framer-motion'

const anybody = Anybody({ subsets: ['latin'] })

export default function Hero() {
    const { getString } = useLanguage()
    return (
        <section className={styles.section}>
            <div className={styles.heroContainer}>
                <motion.div
                    className={styles.heroTextContainer}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ease: 'easeInOut', staggerChildren: 0.2 }}
                >
                    <h1 className={`${styles.heroTitle} ${anybody.className}`}>{getString('hero-title')}</h1>
                    <h2 className={styles.heroSubtitle}>{getString('hero-subtitle')}</h2>
                    <CtaButton />
                </motion.div>
                <Image
                    src="/photos/hero_img.webp"
                    alt="Rajawali Production Indonesia"
                    width={1920}
                    height={700}
                    quality={100}
                    className={styles.heroImage}
                    placeholder="blur"
                    blurDataURL="LOLVR7IWFts:}=f6o|oeGYbHw1kC"
                />
                <div className={styles.heroOverlayRed}></div>
                <div className={styles.heroOverlayBlack}></div>
                <Image src="/clip-path.svg" alt="clip" width={1280} height={144} className={styles.heroClip} />
            </div>
        </section>
    )
}
