import { useState } from 'react'

type Props = {
    setCollapsed: (isCollapsed: boolean) => void
}

export default function Hamburger({ setCollapsed }: Props) {
    const [isActive, setIsActive] = useState(false)
    const onClickButton = () => {
        setIsActive(!isActive)
        setCollapsed(!isActive)
    }

    return (
        <button
            className={`hamburger hamburger--spin ${
                isActive ? 'is-active' : ''
            }`}
            type="button"
            onClick={onClickButton}
        >
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
        </button>
    )
}
