import React from 'react'
import { CardSection, AboutUsImg, AboutUsImgContainer, CardContainer, CardTitle, CardText } from './PersonalCard.elements'
import { FaGithub } from 'react-icons/fa'

const PersonalCard = ({ image, name, description, github }) => {
    return (
        <>
            <CardSection>
                <AboutUsImgContainer>
                    <AboutUsImg src={image}></AboutUsImg>
                </AboutUsImgContainer>
                <CardContainer>
                    <CardTitle>{name}</CardTitle>
                    <CardText>{description}</CardText>
                    <a href={github}><FaGithub></FaGithub></a>
                </CardContainer>
            </CardSection>
        </>
    )
}

export default PersonalCard