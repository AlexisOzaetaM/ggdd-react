import React from 'react'

import './Card.scss'

export const Card = ({ children, customClass }) => (
    <div className={`card ${customClass}`}>
        {children}
    </div>
)