'use client'

import { useLanguage } from '../../languages/language-context'
import styles from './partners.module.css'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Partners() {
    const { getString } = useLanguage()
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

    const imageWidth = 100
    const [imageMargin, setImageMargin] = useState(20)

    const ref = useRef<HTMLDivElement>(document.createElement('div'))

    const duplicateLogoArray = [...logoArray, ...logoArray]
    const [logoArrayState, setLogoArrayState] = useState(logoArray)

    const [currentIndex, setCurrentIndex] = useState(0)
    const [showCount, setShowCount] = useState(9)
    const [pauseTransition, setPauseTransition] = useState(false)

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex >= logoArray.length + 1 ? 0 : prevIndex + 1))
    }

    useEffect(() => {
        if (currentIndex === logoArray.length) {
            setTimeout(() => {
                setPauseTransition(true)
                setCurrentIndex(0)
                setTimeout(() => {
                    setPauseTransition(false)
                }, 500)
            }, 500)
        }
    }, [currentIndex, logoArray.length])

    useEffect(() => {
        if (showCount < 9) {
            setLogoArrayState(duplicateLogoArray)
        } else {
            setCurrentIndex(0)
            setLogoArrayState(logoArray)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showCount])

    useEffect(() => {
        // Automatically slide images every 2 seconds if less than 8 images are shown
        if (showCount < 9) {
            const slideInterval = setInterval(() => {
                nextImage()
            }, 2000)

            return () => {
                clearInterval(slideInterval)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showCount])

    useEffect(() => {
        // Adjust the number of images to show based on screen width
        const handleResize = () => {
            setImageMargin(window.innerWidth < 768 ? 20 : 40)
            const padding = window.innerWidth < 768 ? 48 : 144
            const maxImagesToShow = Math.floor((window.innerWidth - padding) / (imageWidth + imageMargin)) // Adjust 120 based on your image width + margin
            setShowCount(maxImagesToShow > 9 ? 9 : maxImagesToShow)
        }

        handleResize() // Initial check
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [imageMargin])

    return (
        <div className={styles.partnersContainer}>
            <h1 className={styles.partnersCaption}>{getString('partner-caption')}</h1>
            <div className={styles.carouselContainer}>
                <div className={styles.carousel}>
                    <div
                        ref={ref}
                        className={styles.imageList}
                        style={{
                            transform: `translateX(-${currentIndex * (imageWidth + imageMargin)}px)`,
                            transition: `${pauseTransition ? 'none' : 'transform 0.5s ease-in-out'}`,
                        }}
                        data-index={currentIndex}
                    >
                        {logoArrayState.map((image, index) => (
                            <Image key={index} src={image.src} alt={image.id} width={imageWidth} height={imageWidth} />
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.overlay} />
        </div>
    )
}
