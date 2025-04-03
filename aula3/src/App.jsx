import React from 'react'
import Aluno from './assets/components/Aluno'

const App = () => {
  return (
    <div>
      {
        [{nome: "João", email: "joao@gmail.com", curso: "Sistemas para internet"},
         {nome: "Maria", email: "maria@gmail.com", curso: "Fisioterapia"},
         {nome: "Caio", email: "caio@gmail.com", curso: "Ed. sisica"}
        ].map((aluno) => 
          <Aluno nome={aluno.nome} email={aluno.email} curso={aluno.curso} />
        )
      }
    </div>
  )
}

export default App