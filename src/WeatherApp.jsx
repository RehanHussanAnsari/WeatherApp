import SearchBox from "./SearchBox.jsx"
import "./WeatherApp.css"
import {useState} from "react"
import InfoBox from "./InfoBox.jsx"


export default function WeatherApp(){

    const [weatherInfo, setWeatherInfo] = useState({
        weather_conditions: null,
        city: null,
        temp: null,
        temp_max: null,
        temp_min: null,
        humidity: null,
        pressure: null,
        feels_like: null
    });

    let updateInfo = (result)=> {
        setWeatherInfo(result);
    }

    return(
        <>
            <h1 className="heading">Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox weatherInfo={weatherInfo}/>
        </>
    );
}