import React from "react";
import GlobalStyle from './globalStyles';
import Routes from './routes/Routes';
import {BrowserRouter as Router} from 'react-router-dom';
import {transitions, positions, Provider as AlertProvider, useAlert} from 'react-alert'
import Alert from "./components/Alert";
import echo from "./services/echos";
import {getUser} from "./helpers";


const options = {
    position: positions.BOTTOM_RIGHT,
    timeout: 5000,
    offset: '30px',
    transition: transitions.SCALE
}

function App() {
    return (
        <Router>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap" rel="stylesheet"/>
            <GlobalStyle/>
            <AlertProvider template={Alert} {...options}>
                <Routes/>
            </AlertProvider>
        </Router>
    );
}

export default App;