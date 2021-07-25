import React from 'react'

import './Input.scss'

export const INPUT_TYPE_TEXT = "text"
export const INPUT_TYPE_DATE = "date"
export const INPUT_TYPE_EMAIL = "email"
export const INPUT_TYPE_NUMBER = "number"
export const INPUT_TYPE_PASSWORD = "password"

export const Input = ({ 
        labelText = "", 
        placeholder = "", 
        type = INPUT_TYPE_TEXT, 
        error = "",
        isRequired = false,
        onChange = undefined
    }) => (
    <div className="textBox">
        <label className="textBox__label">{labelText}</label>
        <input className="textBox__input" 
            type={type}
            placeholder={placeholder}
            required={isRequired}
            onChange={onChange}
            />
        <p className={`textBox__error${error && "-show"}`}>{error}</p>
    </div>
)