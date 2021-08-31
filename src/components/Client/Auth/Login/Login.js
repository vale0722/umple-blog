import React from 'react'
import { LoginSesion } from './Login.elements'
import { Card, Title } from '../../../../globalStyles'

const Login = () => {
    return (
        <LoginSesion>
            <Title>Inicia Sesión</Title>
            <Card width="50%">Email</Card>
            <Card width="50%">Contraseña</Card>
        </LoginSesion>
    )
}

export default Login
