'use client'

import styles from './card.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useLanguage } from '@/app/languages/language-context'

export type CardProps = {
    title: string
    description: string
    imageSrc: string
    imageAlt: string
    link: string
}

export default function Card({ title, description, imageSrc, imageAlt, link }: CardProps) {
    const router = useRouter()
    const { getString } = useLanguage()

    const onClick = () => {
        router.push(link)
    }

    return (
        <div className={styles.card} onClick={onClick}>
            <Image className={styles.cardImage} alt={imageAlt} src={imageSrc} width={360} height={160} loading={'lazy'}></Image>
            <div className={styles.cardContent}>
                <div className={styles.cardTextContent}>
                    <div className={styles.cardTitle}>{title}</div>
                    <div className={styles.cardDescription}>{description}</div>
                </div>
                <div className={styles.cardButton}>
                    {getString('learn-more')} <span style={{ marginInlineStart: '4px' }}>&gt;</span>
                </div>
            </div>
        </div>
    )
}
