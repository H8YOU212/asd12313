import './App.css';
import React from 'react';
import Home from './components/Home/Home';
import Contacts from './components/Contact/Contacts';
import Store from './components/Store/Store';


import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Store />} path="/store" />
          <Route element={<Contacts />} path="/contacts" />
          <Route element={<div>404</div>} path="/*" />
        </Routes>
      </BrowserRouter>
    </div>
      
    );
}




export default App;
