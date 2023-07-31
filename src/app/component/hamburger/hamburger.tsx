type Props = {
    isCollapsed: boolean
    setCollapsed: (isCollapsed: boolean) => void
}

export default function Hamburger({ isCollapsed, setCollapsed }: Props) {
    const onClickButton = () => {
        setCollapsed(!isCollapsed)
    }

    return (
        <button className={`hamburger hamburger--spin ${isCollapsed ? 'is-active' : ''}`} type="button" onClick={onClickButton}>
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
        </button>
    )
}
