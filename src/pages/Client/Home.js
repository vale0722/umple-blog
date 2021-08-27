import React from 'react'
import { Hero, SubHero } from '../../components'
import GlobalStyle from '../../globalStyles';
import background from '../../images/background.png';

const Home = () => {
    return (
        <>
            <GlobalStyle background={background} />
            <Hero />
            <SubHero />
        </>
    )
}

export default Home
