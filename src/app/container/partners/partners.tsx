'use client'

import { useLanguage } from '../../languages/language-context'
import styles from './partners.module.css'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import SwiperCore from 'swiper'
import { Autoplay } from 'swiper/modules'
import { useState, useEffect, use } from 'react'
import { motion, useAnimate, stagger } from 'framer-motion'
import Image from 'next/image'

export default function Partners() {
    const { getString } = useLanguage()
    const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null)
    const logoArray = [
        { id: 'g20', src: '/partners/g20.png' },
        { id: 'dpr', src: '/partners/dpr.png' },
        { id: 'telkom', src: '/partners/telkom.png' },
        { id: 'bpip', src: '/partners/bpip.png' },
        { id: 'pertamina', src: '/partners/pertamina.png' },
        { id: 'kemlu', src: '/partners/kemlu.png' },
        { id: 'pln', src: '/partners/pln.png' },
        { id: 'pupr', src: '/partners/pupr.png' },
        { id: 'ikn', src: '/partners/ikn.png' },
    ]
    const duplicateLogoArray = [...logoArray, ...logoArray]
    const [logoArrayState, setLogoArrayState] = useState(logoArray)
    useEffect(() => {
        setLogoArrayState(window.innerWidth <= 1366 ? duplicateLogoArray : logoArray)
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 1366) {
                setLogoArrayState(duplicateLogoArray)
            } else {
                setLogoArrayState(logoArray)
            }
        })
        return () => {
            window.removeEventListener('resize', () => {
                if (window.innerWidth <= 1366) {
                    setLogoArrayState(duplicateLogoArray)
                } else {
                    setLogoArrayState(logoArray)
                }
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={styles.partnersContainer}>
            <h1 className={styles.partnersCaption}>{getString('partner-caption')}</h1>
            <Swiper
                modules={[Autoplay]}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                slidesPerView={'auto'}
                spaceBetween={30}
                breakpoints={{
                    320: {
                        spaceBetween: 30,
                    },
                    768: {
                        spaceBetween: 45,
                    },
                }}
                loop={true}
                className={styles.swiperContainer}
                wrapperClass={styles.swiperWrapper}
                onSwiper={setSwiperInstance}
            >
                {logoArrayState.map((logo) => (
                    <SwiperSlide key={logo.id}>
                        <div className={styles.logoContainer}>
                            <Image src={logo.src} alt={logo.id} width={200} height={200} className={styles.logoContainer} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={styles.overlay}></div>
        </div>
    )
}
