import styles from './counter.module.css'
import { Anybody } from 'next/font/google'
import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

type Props = {
    text: string
    numbers: number
}

const anybody = Anybody({ subsets: ['latin'] })

export default function Counter({ text, numbers }: Props) {
    const ref = useRef<HTMLSpanElement>(null)
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, {
        damping: 40,
        stiffness: 100,
        duration: 3,
    })

    const isInView = useInView(ref, { once: true, margin: '-20px' })

    useEffect(() => {
        if (isInView) {
            motionValue.set(numbers)
        }
    }, [motionValue, isInView])

    useEffect(() => {
        springValue.on('change', (latest) => {
            if (ref.current) {
                ref.current.textContent = Intl.NumberFormat('en-US').format(latest.toFixed(0))
            }
        })
    }, [springValue])

    return (
        <div className={styles.counter}>
            <div className={styles.counterNumber}>
                <span ref={ref}></span>
                <span>+</span>
            </div>
            <div className={`${styles.counterText} ${anybody.className}`}>{text}</div>
        </div>
    )
}
