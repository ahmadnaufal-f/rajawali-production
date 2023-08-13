import AboutUs from './container/about-us/about-us'
import Advantages from './container/advantages/advantages'
import Hero from './container/hero/hero'
import Partners from './container/partners/partners'
import ProductOverview from './container/product-overview/product-overview'
import Testimonies from './container/testimonies/testimonies'
import styles from './page.module.css'

export default function Home() {
    return (
        <main className={styles.main}>
            <Hero />
            <AboutUs />
            <Partners />
            <ProductOverview />
            <Advantages />
            <Testimonies />
        </main>
    )
}
