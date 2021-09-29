import React from "react";
import {LoginSesion, ImageContainer, ImageContainer2} from "./Login.elements";
import {Button, Container, Title} from "../../../../globalStyles";
import account from "../../../../images/svgs/account.svg";
import sigin from "../../../../images/svgs/signin.svg";

const Login = () => {
    return (
            <div className="h-screen font-sans bg-cover">
                <div className="container mx-auto h-full flex flex-1 justify-center items-center">
                    <div className="w-full max-w-lg">
                        <div className="leading-loose">
                            <form className="max-w-sm m-4 p-10 bg-black bg-opacity-40 rounded shadow-xl">
                                <p className="text-white font-medium text-center text-lg font-bold">Iniciar sesión</p>
                                <div className="mt-4">
                                    <label className="block text-sm text-white" htmlFor="email">Correo Electrónico</label>
                                    <input
                                        className="w-full px-5 py-1 text-gray-700 rounded focus:outline-none bg-white"
                                        type="email" id="email" placeholder="Digita tu correo electrónico" aria-label="email"
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
                                    <Button className="bg-gray-700 text-white text-center w-full font-light tracking-wider hover:bg-gray-800 rounded" type="submit">Entrar</Button>
                                    <Button className="bg-gray-400 text-white text-center w-full font-light tracking-wider hover:bg-gray-500 rounded">Registrate</Button>
                                </div>
                                <a className="inline-block right-0 align-baseline font-bold text-sm text-500 text-white hover:text-gray-400 text-center w-full mt-3"
                                   href="#">¿Olvidaste tu contraseña?</a>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Login;
