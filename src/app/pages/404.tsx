import { Anybody, Hanken_Grotesk } from 'next/font/google'

const anybody = Anybody({ subsets: ['latin'] })

export default function Custom404() {
    return <h1 className={anybody.className}>404 - Page Not Found</h1>
}
