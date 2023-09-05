import ContactForm from '../container/contact-form/contact-form'
import styles from '../page.module.css'
import Location from '../container/location/location'

export default function Home() {
    return (
        <main className={styles.main}>
            <ContactForm />
            <Location />
        </main>
    )
}
