import React, { useState, useRef } from "react";
import { Button } from "../../../../globalStyles";
import { Transition } from "@tailwindui/react";

const Register = ({ closeModal, fetchPost }) => {
  let [img, setImg] = useState();
  let [originalImg, setOriginalImg] = useState();

  let imgValue = useRef();

  let handleChangeImage = (e) => {
    if (e.target.files.length) {
      setOriginalImg(e.target.files[0]);
      setImg(URL.createObjectURL(e.target.files[0]));
    }
  };

  let deleteImage = () => {
    imgValue.value = null;
    setImg(null);
  };

  const [open, setOpen] = useState(false);

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
                <form className="max-w-sm m-4 p-10 bg-black bg-opacity-40 rounded shadow-xl">
                  <p className="text-white font-medium text-center text-lg font-bold">
                    Registrate
                  </p>
                  <div className="mb-5 text-center">
                    <div className="mx-auto w-32 h-32 mb-2 border rounded-full relative bg-gray-100 mb-4 shadow-inset">
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
                      type="button"
                      className="cursor-pointer inine-flex justify-between items-center focus:outline-none border py-2 px-4 rounded-lg shadow-sm text-left text-gray-600 bg-white hover:bg-gray-100 font-medium"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-flex flex-shrink-0 w-6 h-6 -mt-1 mr-1"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <rect
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                          stroke="none"
                        ></rect>
                        <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
                        <circle cx="12" cy="13" r="3" />
                      </svg>
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
                    <label className="block  text-sm text-white">
                      Nombre de usuario
                    </label>
                    <input
                      className="w-full px-5 py-1 text-gray-700 rounded focus:outline-none bg-white"
                      type="password"
                      id="password"
                      placeholder="Digita su nombre de usuario"
                      arial-label="password"
                      required
                    ></input>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm text-white" htmlFor="email">
                      Correo Electrónico
                    </label>
                    <input
                      className="w-full px-5 py-1 text-gray-700 rounded focus:outline-none bg-white"
                      type="email"
                      id="email"
                      placeholder="Digita tu correo electrónico"
                      aria-label="email"
                      required
                    ></input>
                  </div>
                  <div className="mt-4">
                    <label className="block  text-sm text-white">
                      Contraseña
                    </label>
                    <input
                      className="w-full px-5 py-1 text-gray-700 rounded focus:outline-none bg-white"
                      type="password"
                      id="password"
                      placeholder="Digita su contraseña"
                      arial-label="password"
                      required
                    ></input>
                  </div>

                  <div className="mt-4">
                    <label className="block  text-sm text-white">Celular</label>
                    <input
                      className="w-full px-5 py-1 text-gray-700 rounded focus:outline-none bg-white"
                      type="password"
                      id="password"
                      placeholder="Digita su numero de celular"
                      arial-label="password"
                      required
                    ></input>
                  </div>

                  <div className="mt-4 items-center gap-5 flex justify-between">
                    <Button className="bg-gray-400 text-white text-center w-full font-light tracking-wider hover:bg-gray-500 rounded">
                      Registrate
                    </Button>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </Transition>
        </div>
      </div>
    </div>
  );
};

export default Register;
