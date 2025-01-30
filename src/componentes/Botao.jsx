import { useState } from "react";

function Botao(){

    function QuandoClica (){
        alert("Mundo dos Games")
    }

    
    return(
        <button onClick={QuandoClica} className="botao">
            <p>Botão Gamer</p>
        </button>
    )
}

export default Botao;