import React from 'react'
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
        </Switch>
    );
}

export default Routes
