import { useState } from "react"

const Ligth =()=>{
    const [isfoco, setfoco] = useState(false)
    
    const accion =()=>setfoco(!isfoco)

    const estilos ={
        background:isfoco ? 'yellow':'green'

    }
    return(
        <div>
            <div className="bulb" style ={estilos}></div>
            <button onClick={accion}>{isfoco ? "ON":"OFF"}</button>
        </div>

    )
}

export default Ligth