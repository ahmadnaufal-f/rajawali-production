'use client'

import Image from 'next/image'
import styles from './navbar.module.css'
import { useLanguage } from '../../languages/language-context'
import { motion } from 'framer-motion'

export default function LanguageSelector() {
    const { language, switchLanguage } = useLanguage()
    const switchToEnglish = () => {
        switchLanguage('en')
    }
    const switchToIndonesian = () => {
        switchLanguage('id')
    }

    return (
        <div className={styles.navbarMenuItemLangContainer}>
            <div style={{ position: 'relative' }}>
                {language === 'id' ? (
                    <motion.div
                        className={styles.navbarMenuItemLangBorder}
                        layoutId="border"
                        transition={{ layout: { duration: 0.2, ease: 'easeInOut' } }}
                    />
                ) : null}
                <Image
                    className={`${styles.navbarMenuItemLang} ${language === 'id' ? styles.activeLang : ''}`}
                    src={'/id.svg'}
                    width={33}
                    height={33}
                    alt="Indonesian"
                    onClick={switchToIndonesian}
                />
            </div>
            <div className={styles.navbarMenuItemLangSeparator}></div>
            <div style={{ position: 'relative' }}>
                {language === 'en' ? (
                    <motion.div
                        className={styles.navbarMenuItemLangBorder}
                        layoutId="border"
                        transition={{ layout: { duration: 0.2, ease: 'easeInOut' } }}
                    />
                ) : null}
                <Image
                    className={`${styles.navbarMenuItemLang} ${language === 'en' ? styles.activeLang : ''}`}
                    src={'/gb.svg'}
                    width={33}
                    height={33}
                    alt="English"
                    onClick={switchToEnglish}
                />
            </div>
        </div>
    )
}
