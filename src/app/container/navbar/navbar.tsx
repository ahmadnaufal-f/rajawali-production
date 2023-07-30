'use client'

import Link from 'next/link'
import styles from './navbar.module.css'
import Image from 'next/image'
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
                                    <Link href={item.path}>
                                        <div className={styles.navbarMenuItemLink}>{item.name}</div>
                                    </Link>
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
                                                <Link href={submenu.submenupath} className={styles.navbarSubmenusLink}>
                                                    <div>{submenu.name}</div>
                                                </Link>
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
                    <Hamburger setCollapsed={setCollapsed} />
                </div>
            </div>
        </nav>
    )
}
