import './globals.css'
import './color.css'
import './component/hamburger/hamburger.css'
import type { Metadata } from 'next'
import { Anybody, Hanken_Grotesk } from 'next/font/google'
import Navbar from './container/navbar/navbar'
import Footer from './container/footer/footer'
import { LanguageProvider } from './languages/language-context'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const anybody = Anybody({ subsets: ['latin'] })
const hankenGrotesk = Hanken_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Rajawali Production Indonesia',
    description: 'Certified event expertise: trusted rental rigging and equipment',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={hankenGrotesk.className}>
                <LanguageProvider>
                    <Navbar />
                    {children}
                    <Footer />
                </LanguageProvider>
            </body>
        </html>
    )
}
