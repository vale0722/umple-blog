import React from 'react'
import MiniCard from '../MiniCard/MiniCard'
import { cards } from './Data'
import { SubHeroContainer, SubHeroWrape, SubHeroWrapeClip } from './SubHero.elements'

const SubHero = () => {
    let minicards = cards.map((card, key) => (<MiniCard key={key} {...card}></MiniCard>));

    return (
        <>
            <SubHeroContainer>{minicards}</SubHeroContainer>
            <SubHeroWrape viewBox="0 0 500 150" preserveAspectRatio="none">
                <SubHeroWrapeClip d="M0.00,49.99 C150.00,150.00 349.20,-49.99 500.00,49.99 L500.00,150.00 L0.00,150.00 Z">
                </SubHeroWrapeClip>
            </SubHeroWrape>
        </>
    )
}

export default SubHero
