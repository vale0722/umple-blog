import React from 'react'
import MiniCard from '../MiniCard/MiniCard'
import { cardObjOne, cardObjTwo, cardObjThree } from './Data'
import { SubHeroContainer, SubHeroWrape, SubHeroWrapeClip } from './SubHero.elements'

const SubHero = () => {
    return (
        <>
            <SubHeroContainer>
                <MiniCard {...cardObjOne}></MiniCard>
                <MiniCard {...cardObjTwo}></MiniCard>
                <MiniCard {...cardObjThree}></MiniCard>
            </SubHeroContainer>
            <SubHeroWrape viewBox="0 0 500 150" preserveAspectRatio="none">
                <SubHeroWrapeClip d="M0.23,38.78 C150.00,150.00 271.49,-49.99 503.05,85.16 L500.00,0.00 L0.00,0.00 Z">
                </SubHeroWrapeClip>
            </SubHeroWrape>
        </>
    )
}

export default SubHero
