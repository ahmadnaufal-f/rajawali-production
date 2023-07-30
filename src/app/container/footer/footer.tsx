'use client'

import { useLanguage } from '../../languages/language-context'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ScrollLink from '../../component/scroll-link/scroll-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    const { getString } = useLanguage()

    return (
        <footer className={styles.footer}>
            {/* <div className={styles.footerContact}>
                <div className={styles.footerContactText}>
                    <div className={styles.footerContactTitle}>Dummy Title</div>
                    <div className={styles.footerContactDescription}>Dummy Description</div>
                </div>
                <div className={styles.footerContactButton}>
                    <button className="button button--primary button--large">{getString('contact-us')}</button>
                </div>
            </div> */}
            <div className={styles.footerNavigator}>
                <div className={styles.footerNavigatorAddress}>
                    <div className={styles.footerLogo}>
                        <Image src="/logo-footer.svg" alt="logo" width={197} height={43} />
                    </div>
                    <div className={styles.footerNavigatorAddressGroup}>
                        <div className={styles.footerNavigatorAddressSubgroup}>
                            <div className={styles.footerNavigatorTitle}>{getString('address')}</div>
                            <div className={styles.footerNavigatorSubtitle}>Serua, Kec. Ciputat, Kota Tangerang Selatan, Banten 15414</div>
                        </div>
                        <div className={styles.footerNavigatorAddressSubgroup}>
                            <div className={styles.footerNavigatorTitle}>{getString('contact')}</div>
                            <div className={styles.footerNavigatorSubtitle}>081314074417</div>
                            <div className={styles.footerNavigatorSubtitle}>admin@rajawaliproductionindonesia.com</div>
                        </div>
                    </div>
                </div>
                <div className={styles.footerNavigatorLinkContainer}>
                    <div className={styles.footerNavigatorGroup}>
                        <div className={styles.footerNavigatorSubgroup}>
                            <ScrollLink href="/#who-we-are" className={styles.footerNavigatorLink}>
                                {getString('who-we-are')}
                            </ScrollLink>
                            <ScrollLink href="/#product-overview" className={styles.footerNavigatorLink}>
                                {getString('product-overview')}
                            </ScrollLink>
                            <ScrollLink href="/#our-advantages" className={styles.footerNavigatorLink}>
                                {getString('our-advantages')}
                            </ScrollLink>
                            <ScrollLink href="/#testimonies" className={styles.footerNavigatorLink}>
                                {getString('testimonies')}
                            </ScrollLink>
                        </div>
                        <div className={styles.footerNavigatorSubgroup}>
                            <ScrollLink href="/portfolio/gallery" className={styles.footerNavigatorLink}>
                                {getString('highlight-gallery')}
                            </ScrollLink>
                            <ScrollLink href="/portfolio/projects" className={styles.footerNavigatorLink}>
                                {getString('clients-projects')}
                            </ScrollLink>
                            <ScrollLink href="/contact/" className={styles.footerNavigatorLink}>
                                {getString('contact-form')}
                            </ScrollLink>
                        </div>
                    </div>
                    <div className={styles.footerNavigatorGroup}>
                        <div className={styles.footerNavigatorSubgroup}>
                            <ScrollLink href="/product-services/#rigging-aluminium" className={styles.footerNavigatorLink}>
                                {getString('rigging-aluminium-rental')}
                            </ScrollLink>
                            <ScrollLink href="/product-services/#stage-aluminium" className={styles.footerNavigatorLink}>
                                {getString('stage-aluminium')}
                            </ScrollLink>
                            <ScrollLink href="/product-services/#backdrop" className={styles.footerNavigatorLink}>
                                {getString('backdrop')}
                            </ScrollLink>
                            <ScrollLink href="/product-services/#sound-system" className={styles.footerNavigatorLink}>
                                {getString('sound-system')}
                            </ScrollLink>
                            <ScrollLink href="/product-services/#lighting" className={styles.footerNavigatorLink}>
                                {getString('lighting')}
                            </ScrollLink>
                            <ScrollLink href="/product-services/#event-equipments" className={styles.footerNavigatorLink}>
                                {getString('event-equipments')}
                            </ScrollLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footerSeparator}></div>
            <div className={styles.footerBottom}>
                <div className={styles.footerBottomCopyright}>© 2023 Rajawali Production. All Rights Reserved.</div>
                <div className={styles.footerBottomSocial}>
                    <div className={styles.footerBottomSocialIcon}>
                        <FontAwesomeIcon icon={faFacebookF} />
                    </div>
                    <div className={styles.footerBottomSocialIcon}>
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                    <div className={styles.footerBottomSocialIcon}>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                    <div className={styles.footerBottomSocialIcon}>
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                </div>
            </div>
        </footer>
    )
}
