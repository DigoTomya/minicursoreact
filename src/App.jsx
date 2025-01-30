import './App.css'
import Botao from './componentes/Botao'
import Header from './componentes/Header'


import { useState } from 'react'

function App() {

  

  return (
    <div>
      <Header></Header>
      <h1>Entre no Game Sim/Não   
        <input type="text" id="usr" placeholder="Buscar..."/>
      </h1>
      <Botao></Botao>
      
      
    
    </div>
  )
}

export default App
