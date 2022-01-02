import axios from "axios";
import React, { useEffect, useState } from "react";

const Info = () => {
    const [Api, setApi] = useState()
    const [Temp, setTemp] = useState(0, "°C")
    const [isloading, setisloading] = useState(true)
    
    useEffect(()=>{
        setTemp([Math.round(Api?.main.temp - 273.15), "°C"])
    }, [Api?.main.temp])

    useEffect(() => {
        const HandleError = () => {
            console.log("No se ha podido conectar a la api")

        }
        const success = position => {
            const lat = position.coords.latitude
            const lon = position.coords.longitude
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0b1efb536102488587b6f90273cb390c`)
                .then(res => {
                    setApi(res.data)
                    setisloading(false)
                });
            console.log(Api)

        }

        navigator.geolocation.getCurrentPosition(success, HandleError)

    }, [4000])

    const Conversion = () => {
        if (Temp[1] === "°C") {
            setTemp([Math.round((Api?.main.temp - 273.15) * 9 / 5 + 32), "°F"])
        } else {
            setTemp([Math.round(Api?.main.temp - 273.15), "°C"])
        }


    }

    return (
        <div className="Card">
            {isloading ? (
                <div className="fondo">
                    <p>Wait a moment please...</p>
                    <div className="loader">

                    </div>
                </div>
            ) : (
                <>
                    <h1>Weather App</h1>
                    <h3 id="uno">Humidity: {Api?.main.humidity}%</h3>
                    <h3 id="dos">Pressure: {Api?.main.pressure}</h3>
                    <img src={`http://openweathermap.org/img/wn/${Api?.weather[0].icon}@2x.png`} />
                    <h1>Country: {Api?.sys.country}</h1>
                    <h2>City: {Api?.name}</h2>
                    <p>Temperature: {Temp}</p>
                    <button onClick={Conversion}>{Temp[1] === "°C" ? "Farenheit" : "Celsius"}</button>
                </>
            )}
        </div>
    )
}

export default Info