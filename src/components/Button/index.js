import React from 'react'

import './Button.scss'

export const BUTTON_TYPE_BUTTON = "button"
export const BUTTON_TYPE_RESET = "reset"
export const BUTTON_TYPE_SUBMIT = "submit"

export const Button = ({
    text = "",
    type = BUTTON_TYPE_BUTTON,
    isDisabled = false
}) => (
    <button className="button"
        type={type} 
        disabled={isDisabled} >
            {text}
        </button>
)