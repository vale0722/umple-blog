import React from 'react'
import { Container } from '../../globalStyles'
import { LoginContainer } from '../../components'
import GlobalStyle from '../../globalStyles';

const Login = () => {
    return (
        <Container big>
            <GlobalStyle background="'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'" />
            <LoginContainer></LoginContainer>
        </Container>
    )
}

export default Login
