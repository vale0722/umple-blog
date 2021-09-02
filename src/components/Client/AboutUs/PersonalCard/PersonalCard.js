import React from 'react'
import {CardSection, AboutUsImg, AboutUsImgContainer, CardContainer} from './PersonalCard.elements'
import {FaGithub} from 'react-icons/fa'
import {IconContext} from "react-icons";

const PersonalCard = ({image, name, description, github}) => {
    return (

        <IconContext.Provider value={{className: "w-full self-center mt-6"}}>
            <CardSection className="bg-white shadow-lg">
                <AboutUsImgContainer>
                    <AboutUsImg className="rounded-full" src={image}></AboutUsImg>
                </AboutUsImgContainer>
                <CardContainer className="text-center">
                    <h1 className="text-lg font-bold">{name}</h1>
                    <h2>{description}</h2>
                    <a className="text-center w-full mt-6" target="_blank" href={github}>
                        <FaGithub></FaGithub>
                    </a>
                </CardContainer>
            </CardSection>
        </IconContext.Provider>
    )
}

export default PersonalCard