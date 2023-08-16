'use client'

import { useLanguage } from '@/app/languages/language-context'
import styles from './cta.module.css'
import CtaButton from '@/app/component/cta-button/cta-button'
import Image from 'next/image'
import { Anybody } from 'next/font/google'

const anybody = Anybody({ subsets: ['latin'] })

export default function Cta() {
    const { getString } = useLanguage()
    return (
        <div className={styles.cta}>
            <Image src="/cta-bg.webp" alt="cta" fill style={{ zIndex: -1 }} />
            <div className={styles.content}>
                <div className={styles.text}>
                    <h1 className={anybody.className}>{getString('cta-title')}</h1>
                    <p>{getString('cta-desc')}</p>
                </div>
                <CtaButton />
            </div>
        </div>
    )
}
