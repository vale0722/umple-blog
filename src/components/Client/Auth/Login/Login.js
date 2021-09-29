import React from "react";
import { LoginSesion, ImageContainer, ImageContainer2 } from "./Login.elements";
import { Title } from "../../../../globalStyles";
import account from "../../../../images/svgs/account.svg";
import sigin from "../../../../images/svgs/signin.svg";

const Login = () => {
  return (
    <div className="flex-row">
      <div className="bg-opacity-50 bg-black h-full flex items-center justify-center w-full"></div>
      <ImageContainer2 src={sigin}></ImageContainer2>

      <div className="mt-28 w-80 h-120 border-solid rounded-sm border-color:#00BCD4">
        <ImageContainer src={account}></ImageContainer>
        <div className="m-3.5">
          <h1 className="w-44 text-2xl mx-8">Iniciar Sesion</h1>
        </div>
        <input
          type="text"
          name="comment"
          id="comment"
          placeholder="Correo Electronico"
          className="w-min text-sm py-4 px-3 rounded-xl focus:shadow-md hover:shadow-md focus:outline-none m-2 lind"
        />
        <input
          type="text"
          name="comment"
          id="comment"
          placeholder="Contraseña"
          className="w-min text-sm py-4 px-3 rounded-xl focus:shadow-md hover:shadow-md focus:outline-none m-2"
        />
        <div class="w-full min-h-screen flex justify-center items-center">
          <button
            data-modal-toggle="example2"
            data-modal-action="open"
            class="bg-indigo-600 font-semibold text-white p-2 w-32 rounded-full hover:bg-purple-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2 mr-24"
          >
            Iniciar sesion
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

/*

    */
