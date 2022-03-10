import useWeatherForecastContainer from "../containers/useWeatherForecastContainer";
import {useEffect, useState} from "react";

const WeatherForecast = () => {
    const cordoba = {
        name: "Córdoba",
        lat: -31.4200938,
        lon: -64.1887808
    }
    const {
        status,
        data,
        isLoading,
        isFailed,
        isSuccess,
        getWeatherForecastHandler,
    } = useWeatherForecastContainer();
    const [weatherForecast, setWeatherForecast] = useState("Esperando respuesta...");
    useEffect(() => {
        if (isSuccess) {
            setWeatherForecast(data)
        }
    }, [status])
    return (
        <div>
            <button onClick={() => getWeatherForecastHandler(cordoba.lat, cordoba.lon)}>Prueba redux</button>
            <div>
                {JSON.stringify(weatherForecast)}
            </div>
        </div>);
}
export default WeatherForecast;