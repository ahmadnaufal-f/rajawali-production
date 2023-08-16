import styles from './testi-card.module.css'
import Image from 'next/image'
import { Anybody } from 'next/font/google'

const anybody = Anybody({ subsets: ['latin'] })

export default function TestiCard({
    logo,
    description,
    name,
    affiliation,
    image,
}: {
    logo: string
    description: string
    name: string
    affiliation: string
    image: string
}) {
    return (
        <div className={styles.testiCard}>
            <Image src={logo} alt={affiliation} width={86} height={54} style={{ objectFit: 'contain', objectPosition: '0 0' }} />
            <p>{description}</p>
            <div className={styles.testiCardFooter}>
                <Image src={image} alt={name} width={56} height={56} />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                    <h4 className={anybody.className}>{name}</h4>
                    <p>{affiliation}</p>
                </div>
            </div>
        </div>
    )
}
