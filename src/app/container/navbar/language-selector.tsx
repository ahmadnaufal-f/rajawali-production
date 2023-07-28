'use client'

import Image from 'next/image'
import styles from './navbar.module.css'
import { useLanguage } from '../../languages/language-context'

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
            <Image
                className={`${styles.navbarMenuItemLang} ${language === 'id' ? styles.activeLang : ''}`}
                src={'/id.svg'}
                width={33}
                height={33}
                alt="Indonesian"
                onClick={switchToIndonesian}
            ></Image>
            <div className={styles.navbarMenuItemLangSeparator}></div>
            <Image
                className={`${styles.navbarMenuItemLang} ${language === 'en' ? styles.activeLang : ''}`}
                src={'/gb.svg'}
                width={33}
                height={33}
                alt="English"
                onClick={switchToEnglish}
            ></Image>
        </div>
    )
}
