import React from "react";
import { Navbar, RegisterContainer } from "../../components";
import GlobalStyle from "../../globalStyles";
import { clientRoutes } from "../../components/Client/Navbar/NavItems";

const Register = (props) => {
  return (
    <>
      <Navbar active={props.match.path} items={clientRoutes} />
      <div className="bg-opacity-50 bg-black h-full flex items-center justify-center w-full flex-grow">
        <GlobalStyle background="'https://images.pexels.com/photos/5653734/pexels-photo-5653734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'" />
        <RegisterContainer></RegisterContainer>
      </div>
    </>
  );
};

export default Register;
