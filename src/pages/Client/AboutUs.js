import React from 'react'
import { Title, Subtitle, Container } from '../../globalStyles'
import city from '../../images/svgs/city.svg'
import {AboutUsSection} from "../../components/Client/AboutUs/AboutUsContainer/AboutUsContainer.elements";
import {developers} from "../../components/Client/AboutUs/AboutUsContainer/Developers";
import PersonalCard from "../../components/Client/AboutUs/PersonalCard/PersonalCard";

const AboutUs = () => {
    const developersCards = developers.map((dev, i) => (<PersonalCard key={i} {...dev}></PersonalCard>))
    return (
        <>
            <Container image={city}>
                <Title> ¿Quienes somos? </Title>
                <Subtitle>
                    Somos un grupo de desarrolladores, estudiantes de Ingenieria de sistemas en la Universidad de Antioquia.
                    Somos jovenes soñadores dispuestos a aprender y mejorar cada día.
                </Subtitle>
                <AboutUsSection className="flex grid grid-cols-1 md:grid-cols-3 gap-5">
                    {developersCards}
                </AboutUsSection>
            </Container>
        </>
    )
}

export default AboutUs
