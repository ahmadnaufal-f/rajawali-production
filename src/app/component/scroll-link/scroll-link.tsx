// components/ScrollLink.tsx
import Link, { LinkProps } from 'next/link'
import React, { PropsWithChildren } from 'react'
import { useRouter } from 'next/navigation'

// mirror the props of next/link component
type AnchorProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>
type ScrollLinkProps = AnchorProps & LinkProps & PropsWithChildren
// component definition
const ScrollLink = ({ children, ...props }: ScrollLinkProps) => {
    const router = useRouter()
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()

        const targetHref = e.currentTarget.href.split('#')[0]
        const currentHref = window.location.href.split('#')[0]

        if (targetHref !== currentHref) {
            router.push(e.currentTarget.href)

            return
        }

        //remove everything before the hash
        const targetId = e.currentTarget.href.replace(/.*\#/, '')
        const elem = document.getElementById(targetId)
        const top = elem?.getBoundingClientRect().top ?? 0
        console.log(elem, elem?.getBoundingClientRect())
        window.scrollBy({
            top: top - 73,
            behavior: 'smooth',
        })
    }
    return (
        <Link {...props} onClick={handleScroll}>
            {children}
        </Link>
    )
}
export default ScrollLink
