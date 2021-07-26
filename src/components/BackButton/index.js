import React from 'react'
import { Link } from 'react-router-dom'

// Icons
import { ArrowLeft, ArrowRight } from '../../assets/icons'
// Styles
import './BackButton.scss'

export const ON_LEFT = 1
export const ON_RIGHT = 2

export const BackButton = ({
    customClass = "",
    path = "/",
    text = "Regresar",
    direction = ON_LEFT }) => (
        <div className={`backButton${direction === ON_LEFT ? "-left" : "-right"}`}>
            {
                direction === ON_LEFT
                ? <Link to={path}> <ArrowLeft /> {text} </Link>
                : <Link to={path}> {text} <ArrowRight /> </Link>
            }
        </div>
    )