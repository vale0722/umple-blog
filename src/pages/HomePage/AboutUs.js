import React from 'react'
import { Title, Subtitle, Container, FooterImg } from '../../globalStyles'
import { AboutUsContainer } from '../../components'
import city from '../../images/svgs/city.svg'

const AboutUs = () => {
    return (
        <>
            <Container image={city}>
                <Title> ¿Quienes somos? </Title>
                <Subtitle>
                    Somos un grupo de desarrolladores, estudiantes de Ingenieria de sistemas en la Universidad de Antioquia.
                    Somos jovenes soñadores dispuestos a aprender y mejorar cada día.
                </Subtitle>
                <AboutUsContainer></AboutUsContainer>
            </Container>
        </>
    )
}

export default AboutUs
