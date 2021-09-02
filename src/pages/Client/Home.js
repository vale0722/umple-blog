import React from 'react'
import background from "../../images/svgs/background.svg";
import {HeroContainer, HeroSec, Subtitle} from "../../components/Client/Dashboard/Hero/Hero.elements";
import {Button} from "../../globalStyles";

const Home = () => {
    return (
        <div className="flex flex-grow md:flex-row flex-col mt-20 md:mt-0">
            <div className="min-h-full">
                <div className="h-full md:grid md:grid-cols-2">
                    <div className="px-4 bg-up-50 h-full">
                        <HeroSec image={background}/>
                    </div>
                    <svg fill="#DADFDF" width="100%" className="h-full hidden md:block"
                         viewBox="0 0 500 150" preserveAspectRatio="none">
                        <path
                            className="hidden md:block"
                            d="M195.48,-0.69 C152.69,67.10 295.93,70.35 238.37,157.20 L0.00,150.00 L0.00,0.00 Z"></path>
                    </svg>
                </div>
            </div>
            <HeroContainer className="md:px-3 md:py-20 md:m-16 m-5 flex-grow flex flex-col place-content-center">
                <h1 className="text-2xl font-bold leading-7 font-extrabold text-gray-900 sm:text-5xl">
                    Un mundo hecho para ti!
                </h1>
                <Subtitle>Comparte tus ideas y encuentra gente como tú</Subtitle>
                <div className="flex justify-center">
                    <div className="grid gap-4 grid-cols-1 md:px-16 w-96">
                        <Button className="bg-up-100" to="/login">Inicia Sesión</Button>ó
                        <Button className="bg-up-50" to="#">Registrate</Button>
                    </div>
                </div>
            </HeroContainer>
        </div>
    )
}

export default Home
