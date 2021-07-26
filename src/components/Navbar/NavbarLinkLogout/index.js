import React from 'react'

export const NavbarLinkLogout = ({ handlerLogout= undefined, text = "" }) => (
    <div onClick={handlerLogout}>{text}</div>
)