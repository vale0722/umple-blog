import React, {useState} from "react";
import {Transition} from "@tailwindui/react";
import {userActions} from "../../../../services/slices";
import {useDispatch} from "react-redux";
import FormData from "form-data";
import {useAlert} from "react-alert";

const Register = () => {
    let [img, setImg] = useState();
    let [originalImg, setOriginalImg] = useState();
    const dispatch = useDispatch();
    const alert = useAlert()
    const [state] = useState({
        'email': null,
        'name': null,
        'password': null
    });

    let handleChangeImage = (e) => {
        if (e.target.files.length) {
            setOriginalImg(e.target.files[0]);
            setImg(URL.createObjectURL(e.target.files[0]));
        }
    };

    async function registerUser() {
        if (state.email && state.password && state.name && originalImg) {
            let formData = new FormData();
            formData.append('photo_uri', originalImg);
            formData.set('email', state.email);
            formData.set('password', state.password);
            formData.set('name', state.name);

            return await dispatch(userActions.register(formData, {headers: {'content-type': 'multipart/form-data'}}))
        }

        alert.error('Todos los campos son requeridos');
    }

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
                            <div className="max-w-sm m-4 p-10 bg-black bg-opacity-40 rounded shadow-xl mt-28 lg:mt-4">
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
                                        onChange={e => state.name = e.target.value}
                                        placeholder="Digita tu nombre de usuario"
                                        required
                                    />
                                </div>
                                <div className="mt-4">
                                    <label className="text-sm text-white">Correo Electr??nico</label>
                                    <input
                                        className="w-full px-4 py-1 text-gray-700 rounded focus:outline-none bg-white"
                                        id="email"
                                        onChange={e => state.email = e.target.value}
                                        type="email"
                                        placeholder="Digita tu correo electr??nico"
                                        required
                                    />
                                </div>
                                <div className="mt-4">
                                    <label className="text-sm text-white">Contrase??a</label>
                                    <input
                                        className="w-full px-4 py-1 text-gray-700 rounded focus:outline-none bg-white"
                                        type="password"
                                        id="password"
                                        onChange={e => state.password = e.target.value}
                                        placeholder="Digita su contrase??a"
                                        required
                                    />
                                </div>

                                <div className="mt-4 items-center gap-5 flex justify-between">
                                    <button onClick={registerUser}
                                            className="bg-gray-400 text-white text-center w-full font-light tracking-wider hover:bg-gray-500 rounded">
                                        Registrate
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </Transition>
            </div>
        </div>
    );
};

export default Register;
