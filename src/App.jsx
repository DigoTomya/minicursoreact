import './App.css'
import Botao from './componenetes/Botao'
import Header from './componenetes/Header'

function App() {
  let lista = ["Futebol", "Ginastica", "skate", "Hipismo", "Esgrima"]
  let variavel = ""

  return (
    <div>
      <p> Qual o seu nome? </p>
      <p> {variavel} </p>
      <Header></Header>
      <Botao></Botao>
      
      {
        lista.map((elementoDaVez) => {
          return(
            <h2>{elementoDaVez}</h2>
          )
        })
      }
    </div>
  )
}

export default App
