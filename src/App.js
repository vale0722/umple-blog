import React from "react";
import GlobalStyle from './globalStyles';
import Routes from './routes/Routes';
import {BrowserRouter as Router} from 'react-router-dom';
import {transitions, positions, Provider as AlertProvider} from 'react-alert'

const options = {
    position: positions.BOTTOM_RIGHT,
    timeout: 5000,
    offset: '30px',
    transition: transitions.SCALE
}

const AlertTemplate = ({ style, options, message, close }) => (
    <div style={style}>
        {options.type === 'info' && (
            <div className="flex bg-blue-100 rounded-lg p-4 mb-4 text-sm text-blue-700" role="alert">
                <svg className="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div>{message}</div>
                <button className="font-medium mx-2" onClick={close}><em className="fas fa-times-circle"/></button>
            </div>
        )}
        {options.type === 'success' && (
            <div className="flex bg-green-100 rounded-lg p-4 mb-4 text-sm text-green-700" role="alert">
                <svg className="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div>{message}</div>
                <button className="font-medium mx-2" onClick={close}><em className="fas fa-times-circle"/></button>
            </div>
        )}
        {options.type === 'error' && (
            <div className="flex bg-red-100 rounded-lg p-4 mb-4 text-sm text-red-700" role="alert">
                <svg className="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div>{ message }</div>
                <button className="font-medium mx-2" onClick={close}><em className="fas fa-times-circle"/></button>
            </div>
        )}
        {options.type === 'warning' && (
            <div className="flex bg-yellow-100 rounded-lg p-4 mb-4 text-sm text-yellow-700" role="alert">
                <svg className="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div>{ message }</div>
                <button className="font-medium mx-2" onClick={close}><em className="fas fa-times-circle"/></button>
            </div>
        )}
    </div>
)

function App() {
    return (
        <Router>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap" rel="stylesheet"/>
            <GlobalStyle/>
            <AlertProvider template={AlertTemplate} {...options}>
                <Routes/>
            </AlertProvider>
        </Router>
    );
}

export default App;