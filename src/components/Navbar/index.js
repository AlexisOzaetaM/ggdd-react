import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router'
import { OPTION_TYPE_BUTTON } from '../../constants/Navbar'

import './Navbar.scss'

export const Navbar = ({ options = [] }) => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <Link to="/">
                    <img />
                </Link>
            </div>
            <ul className="navbar__options">
                {
                    options.map(function (option, index) {
                        return (
                            <li key={index} className={`navbar__options_${option.type}`} >
                                <Link to={option.link}>
                                    {
                                        option.type === OPTION_TYPE_BUTTON
                                            ? <button>{option.name}</button>
                                            : option.name
                                    }
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}