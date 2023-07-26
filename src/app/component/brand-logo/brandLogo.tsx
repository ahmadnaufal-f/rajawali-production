import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import styles from './brand.module.css'

type Props = {
    type: number
}

export default function BrandLogo({ type }: Props) {
    const [isLogoHovered, setIsLogoHovered] = useState(false)
    // set logo hover listener
    const logoHoverListener = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsLogoHovered(true)
    }
    const logoUnhoverListener = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsLogoHovered(false)
    }

    return (
        <>
            {type === 0 ? (
                <>
                    <Link href="/">
                        <div
                            className={styles.navbarLogoImage}
                            onMouseEnter={logoHoverListener}
                            onMouseLeave={logoUnhoverListener}
                        >
                            <Image
                                priority
                                width={197}
                                height={73}
                                src={
                                    isLogoHovered
                                        ? '/default-logo-hover.svg'
                                        : '/default-logo.svg'
                                }
                                alt="default logo"
                            />
                        </div>
                    </Link>
                    <Link href="/" className={styles.navbarLogoMobile}>
                        <Image
                            priority
                            width={40}
                            height={33}
                            src={'default-logo-bird.svg'}
                            alt="default logo bird"
                        />
                    </Link>
                </>
            ) : (
                <Link href="/" className={styles.navbarLogoMobile}>
                    <Image
                        priority
                        width={80}
                        height={27}
                        src={'default-logo-text.svg'}
                        alt="default logo text"
                    />
                </Link>
            )}
        </>
    )
}
