import './App.css';
import React from 'react';
import Home from './components/Home/Home';
import Contacts from './components/Contact/Contacts';
import About from './components/About/About';


import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Contacts />} path="/contacts" />
          <Route element={<div>404</div>} path="/*" />
        </Routes>
      </BrowserRouter>
    </div>
    
      
    );
}
/*
<div className="Wrapper">
      
      
     
    </div>
*/
export default App;
