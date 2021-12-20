import React, { useState } from "react";
import quotes from './quotes.json'
const Quotebox =()=>{
    const colorArreglo =[
        "#FF9671",
        "#845EC2",
        "#0089BA",
        "#008F7A",
        "#4D8076",
        "#4B4453",
        "#C34A36",
        "#FF8066",
        "#4FFBDF"
    ]


    const[phrase, setphrase] = useState(quotes[0].quote)
    const[author, setauthor] = useState(quotes[0].author)
    const[colores, setcolores] = useState(colorArreglo[0])
    

    

    const changeState = () =>{
        let indice = Math.floor(Math.random()*quotes.length)
        let indiceColor = Math.floor(Math.random()*colorArreglo.length)
        setphrase(quotes[indice].quote)
        setauthor(quotes[indice].author)
        setcolores(colorArreglo[indiceColor])
    }
    


    return(
        <div id="fondo" style={{backgroundColor:colores}}>
            <div id="tarjeta">
                <h2>
                <i class="fas fa-quote-left"></i>
                </h2>
                <p style={{color:colores}}>{phrase}</p>
                <p id="author" style={{color:colores}}>{author}</p>
                <button id="boton" onClick={changeState}>
                <i class="fas fa-greater-than"></i>
                    
                </button>
            </div>
        </div>
    )
}
export default Quotebox




