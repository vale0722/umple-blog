import React from 'react'
import background from "../../images/svgs/background.svg";
import {HeroContainer, HeroSec, Subtitle} from "../../components/Client/Dashboard/Hero/Hero.elements";
import {Button} from "../../globalStyles";

const Home = () => {
    return (
        <HeroSec image={background} big className="h-full md:flex md:flex-col-reverse justify-center md:items-end md:px-5">
            <HeroContainer className="md:px-20 md:py-20 md:m-16 my-16">
                <h1 className="text-2xl font-bold leading-7 font-extrabold text-gray-900 sm:text-5xl">
                    Un mundo hecho para ti!
                </h1>
                <Subtitle>Comparte tus ideas y encuentra gente como tú</Subtitle>
                <div className="grid gap-4 grid-cols-1 md:px-16">
                    <Button className="bg-up-100" to="/login">Inicia Sesión</Button>ó
                    <Button className="bg-up-50" to="#">Registrate</Button>
                </div>
            </HeroContainer>
        </HeroSec>
    )
}

export default Home
