'use client'

import { useLanguage } from '../../languages/language-context'
import { Anybody } from 'next/font/google'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const anybody = Anybody({ subsets: ['latin'] })

export default function AboutUs() {
    const { getString } = useLanguage()
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        setIsMobile(window.innerWidth <= 768)
    }, [])

    // set window resize listener
    useEffect(() => {
        const resizeListener = () => {
            setIsMobile(window.innerWidth <= 768)
        }
        window.addEventListener('resize', resizeListener)
        return () => {
            window.removeEventListener('resize', resizeListener)
        }
    }, [])

    return (
        <motion.div
            style={{ width: '100%', padding: '3.75rem', display: 'flex', flexDirection: 'column' }}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: 'easeInOut', staggerChildren: 0.2 }}
        >
            <div
                style={{
                    margin: '0 auto 0.75rem',
                    fontSize: '1.2rem',
                    lineHeight: '1.5rem',
                    color: 'var(--primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5rem',
                    fontWeight: '700',
                }}
            >
                {getString('about-us')}
            </div>
            <div
                style={{
                    margin: '0 auto 0.75rem',
                    fontSize: `${isMobile ? '2rem' : '3rem'}`,
                    lineHeight: `${isMobile ? '2.5rem' : '3.5rem'}`,
                    color: '#101828',
                    fontWeight: '700',
                    textAlign: 'center',
                }}
                className={anybody.className}
            >
                {getString('who-we-are')}
            </div>
            <div
                style={{
                    margin: '0 auto',
                    fontSize: '1.25rem',
                    lineHeight: '2rem',
                    color: 'var(--neutral-dark)',
                    fontWeight: '500',
                    textAlign: 'center',
                }}
            >
                {getString('about-us-subtitle')}
            </div>
        </motion.div>
    )
}
