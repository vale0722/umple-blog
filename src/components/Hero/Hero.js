import React from 'react'
import { Button } from '../../globalStyles'
import hero from '../../images/svgs/hero.svg'
import { HeroSec, Heading, Subtitle, HeroContainer, HeroWrapeClip, HeroImg, HeroWrape } from './Hero.elements'

const Hero = () => {
    return (
        <>
            <HeroSec>
                <HeroContainer>
                    <div>
                        <Heading> Un mundo hecho para ti!</Heading>
                        <Subtitle>
                            Comparte tus ideas y encuentra gente como tú
                        </Subtitle>
                        <Button big>Registrate</Button>
                    </div>
                    <HeroImg src={hero}></HeroImg>
                </HeroContainer>
            </HeroSec>
            <HeroWrape viewBox="0 0 500 150" preserveAspectRatio="none">
                <HeroWrapeClip d="M0.23,38.78 C150.00,150.00 271.49,-49.99 503.05,85.16 L500.00,0.00 L0.00,0.00 Z">
                </HeroWrapeClip>
            </HeroWrape>
        </>
    )
}

export default Hero
