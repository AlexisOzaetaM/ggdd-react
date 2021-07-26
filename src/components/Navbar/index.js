import React from 'react';
import { Link } from 'react-router-dom'
import { OPTION_TYPE_BUTTON, OPTION_TYPE_LINK } from '../../constants/Navbar'
import { NavbarLink } from './NavbarLink'
import { NavbarButton } from './NavbarButton'
import { NavbarLinkLogout } from './NavbarLinkLogout'
import { Logo } from '../../assets/img/logo'

import './Navbar.scss'

export const Navbar = ({ path = "/", options = [] }) => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <Link to={path}>
                    <Logo />
                </Link>
            </div>
            <ul className="navbar__options">
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