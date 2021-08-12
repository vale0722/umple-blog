import React from "react";
import { Navbar } from "./components";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles'
import Home from "./pages/HomePage/Home";
import AboutUs from "./pages/HomePage/AboutUs";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about-us" exact component={AboutUs} />
      </Switch>
    </Router>
  );
};

export default App;