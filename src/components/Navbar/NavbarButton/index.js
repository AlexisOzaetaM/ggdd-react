import React from 'react'
import { Link } from 'react-router-dom'

export const NavbarButton = ({ path = "/", text = "" }) => (
    <Link to={path}>
        <button>{text}</button>
    </Link>
)