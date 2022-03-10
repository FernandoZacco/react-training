import {signedGet} from "../util/HttpUtils";

const urlBase = 'https://api.openweathermap.org/data/2.5';

export const weatherUnit = {
    FAHRENHEIT: "imperial",
    CELSIUS: "metric"
}


const getWeatherForecastService = (lat, lon) => {
    const asset = 'onecall';
    const url = `${urlBase}/${asset}`
    const queryParams = {
        lat,
        lon,
        units: weatherUnit.CELSIUS,
        exclude: "hourly,minutely"
    }
    return signedGet(url, queryParams);
}
export {
    getWeatherForecastService,
}