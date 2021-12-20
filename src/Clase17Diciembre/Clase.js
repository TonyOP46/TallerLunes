import React from "react";
import "./Estilos.css"


const MostrarUsers = ({name, photo, address, phone, email}) =>{
    
    return(
        <div className="user">
            <h3>{name}</h3>
            <img src={photo} alt="" />
            <ul>
                <li><i class="fas fa-map-marker"></i>{address}</li>
                <li><i class="fas fa-phone"></i>{phone}</li>
                <li><i class="fas fa-envelope"></i>{email}</li>
            </ul>
            <button><i class="fas fa-exchange-alt"></i></button>
        </div>
    )
}


export default MostrarUsers