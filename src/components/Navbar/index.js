import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { OPTION_TYPE_BUTTON, OPTION_TYPE_LINK } from '../../constants/Navbar'
import { NavbarLink } from './NavbarLink'
import { NavbarButton } from './NavbarButton'
import { NavbarLinkLogout } from './NavbarLinkLogout'
import { Logo } from '../../assets/img/logo'
import { Bars } from '../../assets/icons'

import './Navbar.scss'

export const Navbar = ({ path = "/", options = [] }) => {
    const [isOpen, openMenu] = useState(false)
    const [isMobileOrTabletScreen, setMobileOrTabletScreen] = useState(false)

    function handleToggleMenu(e) {
        e.preventDefault()
        openMenu(!isOpen)
    }

    useEffect(() => {
        const onResize = () => {
            const isMobileOrTablet = window.innerWidth <= 768
            setMobileOrTabletScreen(isMobileOrTablet)
        }
        window.addEventListener('resize', onResize)

        onResize()
    }, [])

    return (
        <nav className="navbar">
            <div className="navbar__header">
                <div className="navbar__header__logo">
                    <Link to={path}>
                        <Logo />
                    </Link>
                </div>
                <div className="navbar__header__toggleButton">
                    <div onClick={handleToggleMenu}>
                        <Bars />
                    </div>
                </div>
            </div>
            <ul className={`navbar__options${isMobileOrTabletScreen ? (isOpen ? "-show" : "-hide") : ""}`}>
                {
                    options.map(function (option, index) {
                        return (
                            <li key={index} className={`navbar__options__${option.type}`} >
                                {
                                    option.type === OPTION_TYPE_LINK
                                    ? <NavbarLink path={option.link} text={option.name} />
                                    : option.type === OPTION_TYPE_BUTTON
                                    ? <NavbarButton path={option.link} text={option.name} />
                                    : <NavbarLinkLogout handlerLogout={option.method} text={option.name} /> // option.type === OPTION_TYPE_LOGOUT
                                }
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}