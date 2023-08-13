'use client'

import Chapter from '@/app/component/chapter/chapter'
import { useLanguage } from '../../languages/language-context'
import styles from './advantages.module.css'
import { advantagesItems } from './advantages-item'
import Image from 'next/image'

export default function Advantages() {
    const { getString, language } = useLanguage()
    const title = getString('about-us')
    const subtitle = getString('our-advantages')
    const description = getString('our-advantages-desc')
    const id = 'our-advantages'
    return (
        <>
            <Chapter title={title} subtitle={subtitle} description={description} id={id} />
            <div className={styles.container}>
                <div className={styles.advantagesContainer}>
                    <div className={styles.advantagesWrapper}>
                        {advantagesItems.map((item, index) => (
                            <div key={index} className={styles.advantagesItem}>
                                <div className={styles.advantagesIconWrapper}>
                                    <Image className={styles.advantagesIcon} src={item.iconPath} alt={getString(item.id)} width={36} height={36} />
                                </div>
                                <div className={styles.advantagesTitle}>{getString(item.id)}</div>
                                <div className={styles.advantagesDescription}>{getString(`${item.id}-desc`)}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
