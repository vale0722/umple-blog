import React, {useState} from "react";
import {Button} from "../../../../globalStyles";
import {Transition} from "@tailwindui/react";

const Register = () => {
    let [img, setImg] = useState();
    let [originalImg, setOriginalImg] = useState();

    let handleChangeImage = (e) => {
        if (e.target.files.length) {
            setOriginalImg(e.target.files[0]);
            setImg(URL.createObjectURL(e.target.files[0]));
        }
    };

    console.log(originalImg)

    const [open, setOpen] = useState(false);

    setTimeout(function () {
        setOpen(true);
    }, 500);
    return (
        <div className="container mx-auto h-full flex flex-1 justify-center items-center">
            <div className="w-full max-w-lg">
                <Transition show={open}>
                    <Transition.Child
                        enter="transition-opacity duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                    >
                        <div className="leading-loose md:transform md:hover:scale-110 duration-500">
                            <form className="max-w-sm m-4 p-10 bg-black bg-opacity-40 rounded shadow-xl mt-28 lg:mt-4">
                                <p className="text-white font-medium text-center text-lg font-bold">Registrate</p>
                                <div className="mb-5 text-center">
                                    <div className="mx-auto w-32 h-32 border rounded-full my-4 shadow-inset">
                                        <img
                                            id="image"
                                            alt="User Profile"
                                            className="object-cover w-full h-32 rounded-full"
                                            src={
                                                img ??
                                                "https://us.123rf.com/450wm/thesomeday123/thesomeday1231709/thesomeday123170900021/85622928-icono-de-perfil-de-avatar-predeterminado-marcador-de-posici%C3%B3n-de-foto-gris-vectores-de-ilustraciones.jpg?ver=6"
                                            }
                                        />
                                    </div>

                                    <label
                                        htmlFor="fileInput"
                                        className="cursor-pointer inine-flex justify-between items-center focus:outline-none border py-2 px-4 rounded-lg shadow-sm text-left text-gray-600 bg-white hover:bg-gray-100 font-medium"
                                    >
                                        <em className="fas fa-camera mr-2"/>
                                        Seleccionar foto
                                    </label>

                                    <input
                                        name="photo"
                                        id="fileInput"
                                        accept="image/*"
                                        className="hidden"
                                        type="file"
                                        onChange={handleChangeImage}
                                    />
                                </div>
                                <div className="mt-4">
                                    <label className="text-sm text-white">Nombre de usuario</label>
                                    <input
                                        className="w-full px-4 py-1 text-gray-700 rounded focus:outline-none bg-white"
                                        id="name"
                                        type="text"
                                        placeholder="Digita tu nombre de usuario"
                                        required
                                    />
                                </div>
                                <div className="mt-4">
                                    <label className="text-sm text-white">Correo Electrónico</label>
                                    <input
                                        className="w-full px-4 py-1 text-gray-700 rounded focus:outline-none bg-white"
                                        id="email"
                                        type="email"
                                        placeholder="Digita tu correo electrónico"
                                        required
                                    />
                                </div>
                                <div className="mt-4">
                                    <label className="text-sm text-white">Contraseña</label>
                                    <input
                                        className="w-full px-4 py-1 text-gray-700 rounded focus:outline-none bg-white"
                                        type="password"
                                        id="password"
                                        placeholder="Digita su contraseña"
                                        required
                                    />
                                </div>

                                <div className="mt-4 items-center gap-5 flex justify-between">
                                    <Button to="/"
                                            className="bg-gray-400 text-white text-center w-full font-light tracking-wider hover:bg-gray-500 rounded">
                                        Registrate
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </Transition.Child>
                </Transition>
            </div>
        </div>
    );
};

export default Register;
