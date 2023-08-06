'use client'

import Chapter from '@/app/component/chapter/chapter'
import { useLanguage } from '../../languages/language-context'
import styles from './advantages.module.css'

export default function Advantages() {
    const { getString, language } = useLanguage()
    const title = getString('about-us')
    const subtitle = getString('our-advantages')
    const description = getString('product-overview-desc')
    const id = 'our-advantages'
    return (
        <>
            <Chapter title={title} subtitle={subtitle} description={description} id={id} />
        </>
    )
}
