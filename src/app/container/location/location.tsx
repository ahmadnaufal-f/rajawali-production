'use client'

import styles from './location.module.css'
import { useLanguage } from '@/app/languages/language-context'
import Chapter from '@/app/component/chapter/chapter'
import { useState } from 'react'
import Image from 'next/image'
import { Hanken_Grotesk } from 'next/font/google'

const hankenGrotesk = Hanken_Grotesk({ subsets: ['latin'] })

export default function Location() {
    const { getString } = useLanguage()
    const title = getString('contact-us')
    const subtitle = getString('our-location')
    const description = getString('find-us-here')
    const id = 'location'

    const [selector, setSelector] = useState(0)
    const address = 'Gg. H Niman, Serua, Kec. Ciputat, Kota Tangerang Selatan, Banten 15414'

    return (
        <>
            <Chapter title={title} subtitle={subtitle} description={description} id={id} />
            <div style={{ display: 'flex' }}>
                <div className={styles.locationContainer}>
                    <div className={styles.selectorContainer}>
                        <div className={`${styles.selector} ${selector === 0 ? styles.active : ''}`} onClick={() => setSelector(0)}>
                            <div className={styles.selectorTitle}>{getString('our-office')}</div>
                            <div className={styles.selectorSubtitle}>{address}</div>
                            <button className={`${styles.selectorButton} ${hankenGrotesk.className}`}>{getString('view-map')}</button>
                        </div>
                        <div className={`${styles.selector} ${selector === 1 ? styles.active : ''}`} onClick={() => setSelector(1)}>
                            <div className={styles.selectorTitle}>{getString('our-workshop')}</div>
                            <div className={styles.selectorSubtitle}>{address}</div>
                            <button className={`${styles.selectorButton} ${hankenGrotesk.className}`}>{getString('view-map')}</button>
                        </div>
                    </div>
                    <div className={styles.mapContainer}>
                        <Image src="/ss-map.png" alt="rajawali production location" width={988} height={649} />
                    </div>
                </div>
            </div>
        </>
    )
}
