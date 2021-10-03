import React from "react";
import { LoginContainer, Navbar } from "../../components";
import GlobalStyle from "../../globalStyles";
import { clientRoutes } from "../../components/Client/Navbar/NavItems";

const Login = (props) => {
  return (
    <>
      <Navbar active={props.match.path} items={clientRoutes} />
      <div className="bg-opacity-50 bg-black h-full flex items-center justify-center w-full flex-grow">
        <GlobalStyle background="'https://images.pexels.com/photos/5653734/pexels-photo-5653734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'" />
        <LoginContainer></LoginContainer>
      </div>
    </>
  );
};

export default Login;
