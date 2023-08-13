'use client'

import { useLanguage } from '../../languages/language-context'
import Counter from '../../component/counter/counter'
import styles from './about.module.css'
import Image from 'next/image'
import Chapter from '../../component/chapter/chapter'
import { motion } from 'framer-motion'

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

    const title = getString('about-us')
    const subtitle = getString('who-we-are')
    const description = getString('about-us-subtitle')

    return (
        <>
            <Chapter title={title} subtitle={subtitle} description={description} id={'who-we-are'} />
            <div className={`${styles.section} ${styles.gray}`}>
                <div className={styles.numbersContainer}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ ease: 'easeInOut' }}
                        className={styles.numbersPics}
                    >
                        <Image src="/photos/about_img2.webp" alt="rigging stage" layout="fill" objectFit="cover" objectPosition="center" />
                    </motion.div>
                    <div className={styles.numbersText}>
                        <div className={styles.numbersTitle}>
                            {getString('trust-in-our')}
                            <span className={styles.numbersTitleHighlight}>{getString('certified-rigging-services')}</span>
                            {getString('for-a-seamless-event-exp')}
                        </div>
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
