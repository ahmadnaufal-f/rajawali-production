'use client'

import Link from 'next/link'
import styles from './button.module.css'
import { useLanguage } from '../../languages/language-context'
import { motion } from 'framer-motion'

export default function CtaButton() {
    const { getString } = useLanguage()
    return (
        <Link href="/contact">
            <motion.div className={styles.button} whileHover={{ scale: 1.1 }}>
                <span className={styles.buttonText}>{getString('contact-us')}</span>
            </motion.div>
        </Link>
    )
}
