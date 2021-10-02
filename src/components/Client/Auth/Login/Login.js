import React, {useState} from "react";

import {Button} from "../../../../globalStyles";
import {Transition} from '@tailwindui/react'

const Login = () => {
    const [open, setOpen] = useState(false);

    setTimeout(function() {
        setOpen(true)
    }, 500);

    return (
        <div className="h-screen font-sans bg-cover">
            <div className="container mx-auto h-full flex flex-1 justify-center items-center">
                <div className="w-full max-w-lg">
                    <Transition show={open}>
                        <Transition.Child
                            enter="transition-opacity duration-500"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                        >
                            <div className="leading-loose transform hover:-translate-y-1 hover:scale-110 duration-500">
                                <form className="max-w-sm m-4 p-10 bg-black bg-opacity-60 rounded shadow-xl">
                                    <p className="text-white font-medium text-center text-lg font-bold">Iniciar sesión</p>
                                    <div className="mt-4">
                                        <label className="block text-sm text-white" htmlFor="email">Correo Electrónico</label>
                                        <input
                                            className="w-full px-5 py-1 text-gray-700 rounded focus:outline-none bg-white"
                                            type="email" id="email" placeholder="Digita tu correo electrónico"
                                            aria-label="email"
                                            required></input>
                                    </div>
                                    <div className="mt-4">
                                        <label className="block  text-sm text-white">Contraseña</label>
                                        <input
                                            className="w-full px-5 py-1 text-gray-700 rounded focus:outline-none bg-white"
                                            type="password" id="password" placeholder="Digita su contraseña"
                                            arial-label="password" required></input>
                                    </div>

                                    <div className="mt-4 items-center gap-5 flex justify-between">
                                        <Button
                                            className="bg-gray-700 text-white text-center w-full font-light tracking-wider hover:bg-gray-800 rounded"
                                            to="/" type="submit">Entrar</Button>
                                        <Button
                                            className="bg-gray-400 text-white text-center w-full font-light tracking-wider hover:bg-gray-500 rounded"
                                            to="/">Registrate</Button>
                                    </div>
                                    <a className="inline-block right-0 align-baseline font-bold text-sm text-500 text-white hover:text-gray-400 text-center w-full mt-3"
                                       href="#">¿Olvidaste tu contraseña?</a>
                                </form>
                            </div>
                        </Transition.Child>
                    </Transition>
                </div>
            </div>
        </div>
    );
};

export default Login;
