'use client'

import { useLanguage } from '@/app/languages/language-context'
import styles from './contactform.module.css'
import axios from 'axios'
import { useState } from 'react'
import Banner from '@/app/component/banner/banner'
import Image from 'next/image'
import Select, { ActionMeta } from 'react-select'
import { getMenuItems } from '../navbar/menuItems'

const API_URL = process.env.NEXT_PUBLIC_API_URL

type Job = {
    value: string
    label: string
}

export default function ContactForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [isValidEmail, setIsValidEmail] = useState(true)
    const [phoneNumber, setPhoneNumber] = useState('')
    const [job, setJob] = useState<Job | null>(null)
    const [selectedProducts, setSelectedProducts] = useState<string[]>([])
    const [message, setMessage] = useState('')
    const { getString, language } = useLanguage()
    const bannerTitle = getString('contact-form')
    const bannerSubtitle = getString('contact-form-subtitle')
    const bannerImage = '/photos/contact-banner.webp'
    const bannerImageAlt = 'Contact Banner'

    const initialProductOptions = getMenuItems(language)
        ?.find((item) => item.id === 'product-services')
        ?.submenus.map((product) => {
            return { value: product.id, label: product.name }
        })

    const options: Job[] = [
        { value: 'government-employee', label: getString('government-employee') },
        { value: 'event-organizer', label: getString('event-organizer') },
        { value: 'other', label: getString('other') },
    ]

    const selectStyle = {
        option: (provided: any, state: any) => ({
            ...provided,
            padding: '10px',
        }),
    }

    const customTheme = (theme: any) => ({
        ...theme,
        colors: {
            ...theme.colors,
            primary: '#ffa820', // Change the primary color (selected option color)
            primary25: '#ffe4ba',
        },
    })

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = e.target.value
        setEmail(newEmail)

        // Regular expression to check if the email is in a valid format
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

        // Test the email against the pattern
        const isValid = newEmail === '' || emailPattern.test(newEmail)

        // Update the isValidEmail state based on the result
        setIsValidEmail(isValid)
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = {
            firstName,
            lastName,
            email,
            phoneNumber,
            job: job?.value || 'None',
            selectedProducts: selectedProducts.join(' ') || 'None',
            message: message || 'None',
        }

        try {
            // Ensure proper JSON formatting and set Content-Type header
            const response = await axios.post('/api/submit', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            console.log('Submission response:', response.data)
        } catch (error) {
            console.error('Error submitting form:', error)
        }
    }

    const handleProductChange = (value: string) => {
        setSelectedProducts((prevSelected) => {
            if (prevSelected.includes(value)) {
                // Deselect the product if it's already selected
                return prevSelected.filter((product) => product !== value)
            } else {
                // Select the product if it's not already selected
                return [...prevSelected, value]
            }
        })
    }

    return (
        <>
            <Banner imgPath={bannerImage} alt={bannerImageAlt} title={bannerTitle} subtitle={bannerSubtitle} />
            <div className={styles.contactFormContainer}>
                <div className={styles.contactFormBackground}>
                    <Image
                        src="/white-concrete-bg.webp"
                        alt="Contact Form Background"
                        className={styles.contactFormImage}
                        height={1367}
                        width={2048}
                    />
                </div>
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                    <div className={styles.contactFormInput}>
                        <input type="text" required onChange={(e) => setFirstName(e.target.value)} />
                        <label>
                            {getString('first-name')}
                            <span className={styles.asterisk}>*</span>
                        </label>
                    </div>
                    <div className={styles.contactFormInput}>
                        <input type="text" required onChange={(e) => setLastName(e.target.value)} />
                        <label>{getString('last-name')}</label>
                    </div>
                    <div className={styles.contactFormInput}>
                        <input type="email" required onChange={handleEmailChange} className={`${isValidEmail ? '' : styles.invalid}`} />
                        <label>{`${isValidEmail ? getString('email') : getString('please-input-valid-email')}`}</label>
                    </div>
                    <div className={styles.contactFormInput}>
                        <input type="number" required onChange={(e) => setPhoneNumber(e.target.value)} />
                        <label>
                            {getString('phone-number')}
                            <span className={styles.asterisk}>*</span>
                        </label>
                    </div>
                    <div className={styles.contactFormInput} style={{ gridColumn: '1 / span 2' }}>
                        <p>
                            {getString('choose-what-best-describes-you')}
                            <span className={styles.asterisk}>*</span>
                        </p>
                        <Select
                            options={options}
                            value={job}
                            onChange={(option: Job | null, actionMeta: ActionMeta<Job>) => setJob(option)}
                            isMulti={false}
                            className={styles.contactFormSelect}
                            styles={selectStyle}
                            placeholder={getString('select-one')}
                            theme={customTheme}
                        />
                    </div>
                    <div className={styles.contactFormCheckboxContainer} style={{ gridColumn: '1 / span 2' }}>
                        <p>
                            {getString('the-service-you-want-to-ask')}
                            <span className={styles.asterisk}>*</span>
                        </p>
                        <div className={styles.contactFormCheckbox}>
                            {initialProductOptions?.map((product) => (
                                <div key={product.value}>
                                    <label>
                                        <input
                                            type="checkbox"
                                            value={product.value}
                                            checked={selectedProducts.includes(product.value)}
                                            onChange={() => handleProductChange(product.value)}
                                        />
                                        {product.label}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.contactFormInput} style={{ gridColumn: '1 / span 2' }}>
                        <p>
                            {getString('message')}
                            <span className={styles.asterisk}>*</span>
                        </p>
                        <textarea required onChange={(e) => setMessage(e.target.value)} placeholder={getString('write-your-message-here')} />
                    </div>
                    <div className={styles.contactFormSubmitContainer} style={{ gridColumn: '1 / span 2' }}>
                        <div className={styles.contactFormInput} style={{ display: 'flex' }}>
                            <button type="submit" className="button button--primary button--large">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
