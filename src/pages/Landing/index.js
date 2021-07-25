import React from 'react';
import { Navbar } from '../../components/Navbar'
import { LandingInfo } from './LandingInfo'
import { OPTION_TYPE_BUTTON, OPTION_TYPE_LINK } from '../../constants/Navbar'

import './Landing.scss'

const options = [
    {
        type: OPTION_TYPE_LINK,
        name: "En Vivo",
        link: "/"
    },
    {
        type: OPTION_TYPE_BUTTON,
        name: "Soy Entrenador",
        link: "/coach/login"
    }
]

export const Landing = () => (
    <div className="landing">
        <Navbar options={options} />
        <LandingInfo />
    </div>
);