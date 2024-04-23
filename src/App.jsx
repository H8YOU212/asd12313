import './App.css';
import React from 'react';
import Home from './components/Home/Home';
import Contacts from './components/Contact/Contacts';
import Store from './components/Store/Store';
import Cartpage from './Layouts/Cart/Cartpage';


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
          <Route element={<Cartpage/>} path="/Cartpage" />
        </Routes>
      </BrowserRouter>
    </div>
      
    );
}




export default App;
