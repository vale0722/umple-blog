import React from 'react'
import { developers } from './Developers'
import footerDev from '../../images/svgs/footerDev.svg'
import PersonalCard from '../PersonalCard/PersonalCard'
import { AboutUsSection, AboutUsContent, Footer, FooterImg } from './AboutUsContainer.elements'

const AboutUsContainer = () => {
    const developersCards = developers.map((dev, i) => (<PersonalCard key={i} {...dev}></PersonalCard>))
    return (
        <>
            <AboutUsSection>
                <AboutUsContent>
                    {developersCards}
                </AboutUsContent>
            </AboutUsSection>
        </>
    )
}

export default AboutUsContainer
