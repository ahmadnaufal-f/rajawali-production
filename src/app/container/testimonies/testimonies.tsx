'use client'

import styles from './testimonies.module.css'
import Chapter from '@/app/component/chapter/chapter'
import { useLanguage } from '../../languages/language-context'
import TestiCard from '@/app/component/testi-card/testi-card'
import { testiList } from './testi-list'

export default function Testimonies() {
    const { getString } = useLanguage()
    const title = getString('about-us')
    const subtitle = getString('testimonies')
    const description = getString('testimonies-desc')
    const id = 'testimonies'
    testiList.forEach((testi, index) => {
        testi.description = getString(`testi-${index + 1}`)
    })
    return (
        <>
            <Chapter title={title} subtitle={subtitle} description={description} id={id} />
            <div className={styles.testimonies}>
                <div className={styles.testimoniesContainer}>
                    <div className={styles.testimoniesWrapper}>
                        {testiList.map((testi) => (
                            <TestiCard key={testi.name} {...testi} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
