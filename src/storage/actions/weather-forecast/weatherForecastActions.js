import {requestHandler} from "../requestHandler";
import getWeatherForecastActionType from './actionTypes';
import {getWeatherForecastService} from '../../../service/weatherService'

const getWeatherForecastAction = (lat, lon) => {
    return (dispatch) => {
        requestHandler(dispatch, getWeatherForecastActionType.ACTION_NAME)(() => getWeatherForecastService(lat, lon));
    }
}

export {
    getWeatherForecastAction,
}