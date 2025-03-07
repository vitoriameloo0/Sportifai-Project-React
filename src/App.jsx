import { useState } from 'react'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Modal from "./components/Modal";
import Servicos from "./components/Servicos";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <Modal />
      <Servicos />
    </>
  )
}

export default App
