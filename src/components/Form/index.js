import React from 'react'

export const Form = ({ children, submit }) => {
    return (
        <form onSubmit={submit}>
            {children}
        </form>
    )
}