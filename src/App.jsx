import './App.css'
import Botao from './componenetes/Botao'
import Header from './componenetes/Header'

import { useState } from 'react'

function App() {
  let lista = ["Futebol", "Ginastica", "skate", "Hipismo", "Esgrima"]
  let variavel = ""
  const [valor, setValor] = useState("");

  const handleChange = (event) => {
    setValor(event.target.value);
  }

  return (
    <div>
      <p> Qual o seu nome? </p>
      <p> {variavel} </p>
      <Header></Header>
      <p>Digite uma mensagem     
        <input type="text" onChange={handleChange} />
      </p>

      <p>Seu texto: {valor}</p>
      
      
    
    </div>
  )
}

export default App
