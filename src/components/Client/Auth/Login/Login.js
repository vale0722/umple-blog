import React, {useState} from "react";
import {Transition} from "@tailwindui/react";
import {useAlert} from "react-alert";
import {userActions} from "../../../../services/slices";
import {useDispatch} from "react-redux";

const Login = () => {
    const [open, setOpen] = useState(false);
    const alert = useAlert();
    const dispatch = useDispatch();
    const [state] = useState({
        'email': null,
        'password': null
    });

    async function loginUser() {
        if (state.email && state.password) {
            return await dispatch(userActions.login(state))
        }

        alert.error('Ambos campos son requeridos');
    }

    setTimeout(function () {
        setOpen(true);
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
                                <div className="max-w-sm m-4 p-10 bg-black bg-opacity-60 rounded shadow-xl mx-2">
                                    <p className="text-white font-medium text-center text-lg font-bold">
                                        Iniciar sesión
                                    </p>
                                    <div className="mt-4">
                                        <label className="block text-sm text-white" htmlFor="email">
                                            Correo Electrónico
                                        </label>
                                        <input
                                            className="w-full px-5 py-1 text-gray-700 rounded focus:outline-none bg-white"
                                            type="email"
                                            onChange={e => state.email = e.target.value}
                                            id="email"
                                            placeholder="Digita tu correo electrónico"
                                            aria-label="email"
                                            required
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <label className="block  text-sm text-white">
                                            Contraseña
                                        </label>
                                        <input
                                            className="w-full px-5 py-1 text-gray-700 rounded focus:outline-none bg-white"
                                            type="password"
                                            id="password"
                                            onChange={e => state.password = e.target.value}
                                            placeholder="Digita su contraseña"
                                            required
                                        />
                                    </div>

                                    <div className="mt-4 items-center gap-5 flex justify-between">
                                        <button
                                            className="bg-gray-700 text-white text-center w-full font-light tracking-wider hover:bg-gray-800 rounded"
                                            onClick={loginUser}
                                        >
                                            Entrar
                                        </button>
                                        <a
                                            className="bg-gray-400 text-white text-center w-full font-light tracking-wider hover:bg-gray-500 rounded"
                                            href="/Register"
                                        >
                                            Registrate
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </Transition>
                </div>
            </div>
        </div>
    );
};

export default Login;
