import React from 'react'
import { CardSection, CardInfo, CardIcon, CardHead, Footer } from './MiniCard.elements'

const MiniCard = ({ icon, head, subhead, footer }) => {
    console.log(icon);
    return (
        <>
            <CardSection>
                <CardInfo>
                    <CardIcon src={icon}></CardIcon>
                    <CardHead>{head}</CardHead>
                    <Footer>{subhead}</Footer>
                    <Footer end>{footer}</Footer>
                </CardInfo>
            </CardSection>
        </>
    )
}

export default MiniCard
