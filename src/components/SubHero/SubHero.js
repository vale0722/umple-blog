import React from 'react'
import MiniCard from '../MiniCard/MiniCard'
import { cardObjOne, cardObjTwo, cardObjThree } from './Data'
import { SubHeroContainer } from './SubHero.elements'

const SubHero = () => {
    return (
        <>
            <SubHeroContainer>
                <MiniCard {...cardObjOne}></MiniCard>
                <MiniCard {...cardObjTwo}></MiniCard>
                <MiniCard {...cardObjThree}></MiniCard>
            </SubHeroContainer>
        </>
    )
}

export default SubHero
