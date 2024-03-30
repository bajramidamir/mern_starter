import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Login} />
        <Route path='/signup' Component={Signup} />
        <Route path='/home' Component={Home} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
