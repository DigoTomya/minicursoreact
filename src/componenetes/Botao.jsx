import { useState } from "react";

function Botao(){
    const[textoDoBotao, setTextoDoBotao] = useState("Ola mundo")


    function usuarioClicouNoBotao(){
        setTextoDoBotao("Ola universo")
    }
    return(
        <button onClick={usuarioClicouNoBotao}>
            {textoDoBotao}
        </button>
    )
}

export default Botao;