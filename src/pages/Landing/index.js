import React from 'react';
import { Navbar } from '../../components/Navbar'
import { LandingInfo } from './LandingInfo'

import './Landing.scss'

const options = [
    {
        type: "link",
        name: "En Vivo",
        link: "/"
    },
    {
        type: "button",
        name: "Soy Entrenador",
        link: "/coach"
    }
]

export const Landing = () => (
    <div className="landing">
        <Navbar options={options} />
        <LandingInfo />
    </div>
);