'use client'

import styles from './testimonies.module.css'
import Chapter from '@/app/component/chapter/chapter'
import { useLanguage } from '../../languages/language-context'

export default function Testimonies() {
    const { getString } = useLanguage()
    const title = getString('about-us')
    const subtitle = getString('testimonies')
    const description = getString('testimonies-desc')
    const id = 'testimonies'
    return <Chapter title={title} subtitle={subtitle} description={description} id={id} />
}
