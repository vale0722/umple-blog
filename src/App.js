import React from "react";
import { Navbar } from "./components";
import GlobalStyle from './globalStyles';
import Routes from './routes/Routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap" rel="stylesheet" />
      <GlobalStyle />
      <Navbar />
      <Routes />
    </Router>
  );
};

export default App;