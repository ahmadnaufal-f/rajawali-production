import styles from './banner.module.css'
import Image from 'next/image'
import { Anybody } from 'next/font/google'

const anybody = Anybody({ subsets: ['latin'] })

interface Props {
    imgPath: string
    alt: string
    title: string
    subtitle: string
}

export default function Banner({ imgPath, alt, title, subtitle }: Props) {
    return (
        <div className={styles.banner}>
            <div className={styles.bannerBackground}>
                <Image src={imgPath} alt={alt} className={styles.bannerImage} height={235} width={1280} />
            </div>
            <div className={styles.bannerOverlay}></div>
            <h1 className={`${styles.bannerTextTitle} ${anybody.className}`}>{title}</h1>
            <h2 className={styles.bannerTextSubtitle}>{subtitle}</h2>
        </div>
    )
}
