'use client'

import { motion } from 'framer-motion'
import styles from './chapter.module.css'
import { Anybody } from 'next/font/google'

type Props = {
    title: string
    subtitle: string
    description: string
    id: string
}

const anybody = Anybody({ subsets: ['latin'] })

export default function Chapter(props: Props) {
    const { title, subtitle, description, id } = props
    return (
        <motion.div
            className={styles.section}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: 'easeInOut', staggerChildren: 0.2 }}
            id={id}
        >
            <h2 className={styles.aboutUsTitle}>{title}</h2>
            <h1 className={`${styles.aboutUsSubtitle} ${anybody.className}`}>{subtitle}</h1>
            <h3 className={styles.aboutUsDescription}>{description}</h3>
        </motion.div>
    )
}
