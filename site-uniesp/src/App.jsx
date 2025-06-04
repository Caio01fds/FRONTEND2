import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container, Navbar } from 'react-bootstrap'
import Inicial from './pages/Inicial'
import Faculdade from './pages/Faculdade'
import CustomNavbar from './components/CustomNavBar'
import DpoLgpd from './pages/DpoLgpd'
import Noticias from './pages/Noticias'
import VisualizaNoticia from './pages/VisualizaNoticia'



const App = () => {
  return (
    <BrowserRouter>
      <CustomNavbar/>
      <Container className="my-4">
        <Routes>
          <Route path="/" element={<Inicial/>}/>
          <Route path="/A-Faculdade" element={<Faculdade/>}/>
          <Route path="/Dpo-Lgpd" element={<DpoLgpd/>}/>
          <Route path="/Noticias" element={<Noticias/>}/>
          <Route path="/Visualiza-noticia/:id" element={<VisualizaNoticia/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App