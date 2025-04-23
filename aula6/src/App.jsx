import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Inicial from './Pages/Inicial'
import Contato from './Pages/Contato'
import DpoLgpd from './Pages/DpoLgpd'
import Noticias from './Pages/Noticias'
import Faculdade from './Pages/Faculdade'
import Navbar from './assets/Components/NavBar'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Inicial/>}/>
        <Route path='/contato' element={<Contato/>}/>
        <Route path='/dpo-lgpd' element={<DpoLgpd/>}/>
        <Route path='/noticias' element={<Noticias/>}/>
        <Route path='/a-faculdade' element={<Faculdade/>}/>

      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App