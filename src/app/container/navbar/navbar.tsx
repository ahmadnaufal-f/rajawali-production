'use client'

import styles from './navbar.module.css'
import ScrollLink from '../../component/scroll-link/scroll-link'
import { usePathname } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import { getMenuItems, menuItem, submenuItem } from './menuItems'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Hamburger from '../../component/hamburger/hamburger'
import BrandLogo from '@/app/component/brand-logo/brandLogo'
import LanguageSelector from './language-selector'
import { useLanguage } from '../../languages/language-context'

export default function Navbar() {
    const pathname = usePathname()
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [isMenu1Opened, setIsMenu1Opened] = useState(false)
    const [isMenu2Opened, setIsMenu2Opened] = useState(false)
    const { language } = useLanguage()

    useEffect(() => {
        if (!isCollapsed) {
            setIsMenu1Opened(false)
            setIsMenu2Opened(false)
        }
    }, [isCollapsed])

    const isMenuActive = (id: string) => {
        if (id === 'home') {
            return pathname === '/'
        } else {
            return pathname && pathname.startsWith(`/${id}`)
        }
    }

    const setCollapsed = (isCollapsed: boolean) => {
        setIsCollapsed(isCollapsed)
    }

    const menuItems = getMenuItems(language)

    // add on click event to the document to close the menu when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement
            if (target.closest(`.${styles.navbarMenu}`) === null && isCollapsed) {
                setIsCollapsed(false)
            }
        }
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [isCollapsed])

    // add on scroll event to the document to close the menu when scrolling
    useEffect(() => {
        const handleScroll = () => {
            if (isCollapsed) {
                setIsCollapsed(false)
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [isCollapsed])

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarContainer}>
                <div className={styles.navbarLogo}>
                    <BrandLogo type={0} />
                </div>
                <div className={styles.navbarLogo}>
                    <BrandLogo type={1} />
                </div>
                <div className={`${styles.navbarMenu} ${isCollapsed ? `${styles.collapse}` : ''}`}>
                    <ul className={styles.navbarMenuList}>
                        {menuItems.map((item: menuItem, index: number) => (
                            <li
                                key={index}
                                className={`${styles.navbarMenuItem} ${isMenuActive(item.id) ? styles.active : ''} ${
                                    index === 1 ? (isMenu1Opened ? styles.opened : '') : index === 2 ? (isMenu2Opened ? styles.opened : '') : ''
                                }`}
                                onClick={() => {
                                    setIsMenu1Opened(index === 1 ? !isMenu1Opened : false)
                                    setIsMenu2Opened(index === 2 ? !isMenu2Opened : false)
                                }}
                            >
                                {item.path !== null ? (
                                    <ScrollLink setIsCollapsed={setCollapsed} href={item.path}>
                                        <div className={styles.navbarMenuItemLink}>{item.name}</div>
                                    </ScrollLink>
                                ) : (
                                    <div className={styles.navbarMenuItemLink}>
                                        {`${item.name}  `}
                                        {item.submenus.length !== 0 && <FontAwesomeIcon icon={faAngleDown} />}
                                    </div>
                                )}
                                {item.submenus.length !== 0 && (
                                    <div className={styles.navbarSubmenusContainer}>
                                        {item.submenus.map((submenu: submenuItem, index: number, array: submenuItem[]) => (
                                            <div key={index} className={styles.navbarSubmenusItem}>
                                                <ScrollLink
                                                    setIsCollapsed={setCollapsed}
                                                    href={submenu.submenupath}
                                                    className={styles.navbarSubmenusLink}
                                                >
                                                    <div>{submenu.name}</div>
                                                </ScrollLink>
                                                {/* {index !== array.length - 1 && <div className={styles.navbarSubmenusSeparator}></div>} */}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </li>
                        ))}
                        <li className={styles.navbarMenuItem}>
                            <LanguageSelector />
                        </li>
                    </ul>
                </div>
                <div className={styles.navbarHamburger}>
                    <Hamburger isCollapsed={isCollapsed} setCollapsed={setCollapsed} />
                </div>
            </div>
        </nav>
    )
}
