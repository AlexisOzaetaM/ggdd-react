import React, { useState } from 'react'
import { useNavigate } from '@reach/router'
import { Card } from '../../../components/Card'
import { Form } from '../../../components/Form'
import { Input, INPUT_TYPE_EMAIL, INPUT_TYPE_PASSWORD } from '../../../components/Input'
import { Button, BUTTON_TYPE_SUBMIT } from '../../../components/Button'
import { BackButton, ON_LEFT } from '../../../components/BackButton'
import { useAuth } from '../../../contexts/AuthContext'
import { FIREBASE_ERROR_AUTH_USER_NOT_FOUND, FIREBASE_ERROR_AUTH_WRONG_PASSWORD } from '../../../constants/Firebase'

import './Login.scss'

export const CoachLogin = () => {
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [isLoading, setLoading] = useState(false)
    const { login } = useAuth()
    const navigate = useNavigate()

    let onChangeEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    let onChangePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setPasswordError("")
            setEmailError("")
            setLoading(true)
            await login(email, password);
            navigate("/")
        } catch (ex) {
            if (ex.code === FIREBASE_ERROR_AUTH_USER_NOT_FOUND)
                setEmailError("El correo no existe o está mal escrito.")
            else if (ex.code === FIREBASE_ERROR_AUTH_WRONG_PASSWORD)
                setPasswordError("La constraseña es incorrecta.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="coachLogin">
            <BackButton 
                class="coachLogin__backButton"
                text="Regresar" 
                path="/" 
                direction={ON_LEFT} />
            <Card customClass="coachLogin__card">
                <h2 className="coachLogin__card__title">¡Hola, entrenador!</h2>
                <Form submit={handleSubmit}>
                    <Input 
                        type={INPUT_TYPE_EMAIL}
                        labelText="Correo electrónico" 
                        placeholder="Escribe aquí tu correo electrónico"
                        isRequired={true}
                        error={emailError}
                        onChange={onChangeEmail}
                    />
                    <Input 
                        type={INPUT_TYPE_PASSWORD}
                        labelText="Contraseña" 
                        placeholder="Escribe aquí tu contraseña"
                        isRequired={true}
                        error={passwordError}
                        onChange={onChangePassword}
                    />
                    <Button 
                        type={BUTTON_TYPE_SUBMIT}
                        text={isLoading ? "Iniciando sesión..." : "Inicia sesión"}
                        isDisabled={isLoading}
                    />
                </Form>
            </Card>
        </div>
    )
}