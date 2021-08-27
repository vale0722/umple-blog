import React from 'react'
import { LoginSesion, Footer } from './Login.elements'
import login from '../../../../images/svgs/login.svg'
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
