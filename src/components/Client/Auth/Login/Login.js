import React from 'react'
import { LoginSesion, ImageContainer } from './Login.elements'
import { Card, Title } from '../../../../globalStyles'
import account from '../../../../images/svgs/account.svg'

const Login = () => {
    return (
        <LoginSesion>
            <ImageContainer src={account}></ImageContainer>
            <Title>Inicia Sesión</Title>
            <Card width="50%">Email</Card>
            <Card width="50%">Contraseña</Card>
        </LoginSesion>
    )
}

export default Login
