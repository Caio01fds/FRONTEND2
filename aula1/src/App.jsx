import React from 'react'
import Adicao from './components/Adicao'
import Subtracao from './components/Subtracao'
import Multiplicacao from './components/Multiplicacao'

const App = () => {
  return (
    <div>
      <Adicao num1={10} num2= {6} />
      <Subtracao num1={10} num2= {6} />
      <Multiplicacao num1={10} num2= {6} />
    </div>
  )
}

export default App