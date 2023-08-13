'use client'

import Chapter from '@/app/component/chapter/chapter'
import { useLanguage } from '../../languages/language-context'
import styles from './prodover.module.css'
import { getMenuItems } from '../navbar/menuItems'
import Card from '@/app/component/card/card'

export default function ProductOverview() {
    const { getString, language } = useLanguage()
    const title = getString('about-us')
    const subtitle = getString('product-overview')
    const description = getString('product-overview-desc')
    const id = 'product-overview'
    const menuItems = getMenuItems(language).find((item) => item.id === 'product-services')?.submenus
    const cardItems = menuItems?.map((item) => ({
        title: item.name,
        description: getString(`${item.id}-desc`),
        imageSrc: `/products/${item.id}.webp`,
        imageAlt: item.id.replaceAll('-', ' '),
        link: item.submenupath,
    }))

    return (
        <>
            <Chapter title={title} subtitle={subtitle} description={description} id={id} />
            <div className={styles.container}>
                <div className={styles.cardContainer}>
                    <div className={styles.cardWrapper}>
                        {cardItems?.map((item, index) => (
                            <Card
                                key={index}
                                title={item.title}
                                description={item.description}
                                imageSrc={item.imageSrc}
                                imageAlt={item.imageAlt}
                                link={item.link}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
