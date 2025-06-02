import React from 'react'
import Navber from './Component/Navber/Navber'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Tienda from './Component/Pages/Tienda'
import Contacto from './Component/Pages/Contacto'
import Inicio from './Component/Pages/Inicio'
import Footer from './Component/Fotter/Footer'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navber />
        <Routes>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/tienda" element={<Tienda />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App