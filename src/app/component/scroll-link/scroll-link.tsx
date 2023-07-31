import Link, { LinkProps } from 'next/link'
import React, { PropsWithChildren } from 'react'
import { useRouter } from 'next/navigation'

interface Props {
    setIsCollapsed?: (isCollapsed: boolean) => void
}
type AnchorProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>
type ScrollLinkProps = AnchorProps & LinkProps & PropsWithChildren & Props

const ScrollLink = ({ children, setIsCollapsed, ...props }: ScrollLinkProps) => {
    const router = useRouter()
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()

        const targetHref = e.currentTarget.href.split('#')[0]
        const currentHref = window.location.href.split('#')[0]

        if (targetHref !== currentHref) {
            router.push(e.currentTarget.href)

            return
        }

        const targetId = e.currentTarget.href.replace(/.*\#/, '')
        const elem = document.getElementById(targetId)
        const top = elem?.getBoundingClientRect().top ?? 0
        window.scrollBy({
            top: top - 73,
            behavior: 'smooth',
        })
        if (setIsCollapsed) {
            setIsCollapsed(false)
        }
    }
    return (
        <Link {...props} onClick={handleScroll}>
            {children}
        </Link>
    )
}
export default ScrollLink
