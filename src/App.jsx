// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import React from 'react';
import { useState, useEffect } from 'react'

function App() {

  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sobre" element={<Sobre/>}/>
          <Route path="/contato" element={<Contato/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
