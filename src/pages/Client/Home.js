import React, {useState} from 'react'
import {Subtitle} from "../../components/Client/Dashboard/Hero/Hero.elements";
import {Button} from "../../globalStyles";
import {Navbar} from "../../components";
import {clientRoutes} from "../../components/Client/Navbar/NavItems";
import {Transition} from '@tailwindui/react'

const Home = (props) => {
    const [open, setOpen] = useState(false);

    setTimeout(function () {
        setOpen(true)
    }, 500);

    return (
        <>
            <Navbar active={props.match.path} items={clientRoutes}/>
            <header
                className="flex flex-grow md:flex-row flex-col mt-20 md:mt-0 text-white w-full items-center">
                <div
                    className="bg-opacity-50 bg-black flex-grow  flex items-center justify-center w-full container">
                    <Transition show={open}>
                        <Transition.Child
                            enter="transition-opacity duration-500"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                        >
                            <div className="items-center justify-center w-full text-center p-5 gap-5 align-middle">
                                <h1 className="text-2xl font-bold leading-7 font-extrabold text-white sm:text-5xl">
                                    Un mundo hecho para ti!
                                </h1>
                                <Subtitle className="text-white">Comparte tus ideas y encuentra gente como tú</Subtitle>
                                <div className="flex justify-center">
                                    <div className="grid gap-4 grid-cols-1 md:px-16 w-96 text-white">
                                        <Button className="bg-up-100" to="/login">Inicia Sesión</Button>ó
                                        <Button className="bg-up-50" to="#">Registrate</Button>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </Transition>
                </div>
            </header>
        </>
    )
}

export default Home
