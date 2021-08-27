import React from 'react'
import { developers } from './Developers'
import PersonalCard from '../PersonalCard/PersonalCard'
import { AboutUsSection, AboutUsContent } from './AboutUsContainer.elements'

const AboutUsContainer = () => {
    const developersCards = developers.map((dev, i) => (<PersonalCard key={i} {...dev}></PersonalCard>))
    return (
        <>
            <AboutUsSection>
                <AboutUsContent> {developersCards} </AboutUsContent>
            </AboutUsSection>
        </>
    )
}

export default AboutUsContainer
