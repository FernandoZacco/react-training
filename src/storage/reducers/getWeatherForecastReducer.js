import {stateType} from './common'
import getWeatherForecastActionType from '../actions/weather-forecast/actionTypes'

const defaultData = {}
const initialState = {
    data: defaultData,
    status: stateType.INIT
}

const getWeatherForecastReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case getWeatherForecastActionType.ACTION_REQUEST: {
            return {
                data: defaultData,
                status: stateType.LOADING,
            }
        }
        case getWeatherForecastActionType.ACTION_SUCCESS: {
            return {
                data: payload,
                status: stateType.SUCCESS,
            }
        }
        case getWeatherForecastActionType.ACTION_FAILED: {
            return {
                data: defaultData,
                status: stateType.FAILED,
            }
        }
        default: {
            return state;
        }
    }
}
export default getWeatherForecastReducer;