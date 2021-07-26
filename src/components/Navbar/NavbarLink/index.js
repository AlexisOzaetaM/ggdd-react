import React from 'react'
import { Link } from 'react-router-dom'

export const NavbarLink = ({ path= "/", text = "" }) => (
    <Link to={path}>{text}</Link>
)