import React from 'react'
import {Subtitle} from '../../globalStyles'
import {developers} from "../../components/Client/AboutUs/AboutUsContainer/Developers";
import PersonalCard from "../../components/Client/AboutUs/PersonalCard/PersonalCard";
import {Navbar} from "../../components";
import {clientRoutes} from "../../components/Client/Navbar/NavItems";

const AboutUs = (props) => {
    const developersCards = developers.map((dev, i) => (<PersonalCard key={i} {...dev}></PersonalCard>))
    return (
        <>
            <Navbar active={props.match.path} items={clientRoutes}/>
            <header
                className="flex flex-grow md:flex-row flex-col mt-20 md:mt-0 text-white w-full items-center">
                <div className="bg-opacity-50 bg-black h-full flex items-center justify-center w-full">
                    <div className="items-center justify-center w-full container my-5 gap-5">
                        <div className="mx-2 text-center max-w-2xl">
                            <h1 className="text-2xl font-bold leading-7 font-extrabold text-white sm:text-5xl">
                                ¿Quienes somos
                            </h1>
                            <Subtitle className="text-white">
                                Somos un grupo de desarrolladores, estudiantes de Ingenieria de sistemas en la
                                Universidad
                                de Antioquia. Somos jovenes soñadores dispuestos a aprender y mejorar cada día.
                            </Subtitle>
                        </div>
                        <div className="flex flex-col xl:flex-row gap-5">
                            {developersCards}
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default AboutUs
