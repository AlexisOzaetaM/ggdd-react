import React from 'react'
import { Navbar } from '../../components/Navbar'
import { OPTION_TYPE_BUTTON, OPTION_TYPE_LINK, OPTION_TYPE_LOGOUT } from '../../constants/Navbar'
import { useAuth } from '../../contexts/AuthContext'

export const Coach = () => {
    const { logout } = useAuth()

    const options = [
        {
            type: OPTION_TYPE_LINK,
            name: "Mis peleadores",
            method: undefined,
            link: "/boxer"
        },  
        {
            type: OPTION_TYPE_LOGOUT,
            name: "Cerrar sesión",
            method: logout,
            link: "/logout"
        },
        {
            type: OPTION_TYPE_BUTTON,
            name: "Registrar Boxeador/a",
            method: undefined,
            link: "/boxer/signup"
        },
    ]

    return (
        <div className="coach">
            <Navbar path="/coach" options={options} />
        </div>
    )
}