import React from 'react'
import AuthHome from "../pages/Client/Auth/Home";
import Home from "../pages/Client/Home";
import AboutUs from "../pages/Client/AboutUs";
import Login from "../pages/Client/Login";
import { Switch, Route } from 'react-router-dom';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about-us" exact component={AboutUs} />
            <Route path="/login" exact component={Login} />
            <Route path="/auth/home" exact component={AuthHome} />
        </Switch>
    );
}

export default Routes
