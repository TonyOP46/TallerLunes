import { useState } from 'react'


function Numero(){
    const [counter, setContador] = useState(0);

    const increment =()=>{
        setContador(1)
       
    }
    const Decrement =()=> setContador(counter-1)
    return(
        <>
        <h1>{counter}</h1>
        <button onClick={increment}>Incrementar</button>
        <button onClick={Decrement}>Decrementar</button>
        </> 
    )
}

export default Numero
