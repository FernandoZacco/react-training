import {combineReducers} from 'redux';
import getWeatherForecastReducer from "./reducers/getWeatherForecastReducer";

export const storage =  combineReducers({
    getWeatherForecast: getWeatherForecastReducer
})