import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Modal from "./components/Modal";
import Servicos from "./components/Servicos";
import Recursos from './components/Recursos';
import Footer from './components/Footer';
import Login from './components/Login';
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      {/* As rotas para a página principal (Navbar, Home, Modal, etc.) */}
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Navbar />
              <Home />
              <Modal />
              <Servicos />
              <Recursos />
              <Footer />
            </>
          } 
        />
        
        {/* A rota para a página de login (sem Navbar e Footer) */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
