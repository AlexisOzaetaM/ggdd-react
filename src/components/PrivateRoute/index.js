import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

export const Privateroute = ({ component: Component, ...rest }) => {
    const { wasChecked, user } = useAuth()

    return (
        <Route
        {...rest}
        render={props => {
            if (wasChecked)
                return user ? <Component {...props} /> : <Redirect to="/login" />
            return <div>Holas</div>
        }}
        ></Route>
    )
}