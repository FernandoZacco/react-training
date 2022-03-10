import {isFailed, isLoading, isSuccess} from "../storage/reducers/common";
import {useDispatch, useSelector} from "react-redux";
import {getWeatherForecastAction} from "../storage/actions/weather-forecast/weatherForecastActions";


const useWeatherForecastContainer = () => {
    const dispatch = useDispatch();
    const {data, status} = useSelector((state) => state?.getWeatherForecast)
    const getWeatherForecastHandler = (lat, lon) => {
        getWeatherForecastAction(lat, lon)(dispatch);
    }
    return {
        status,
        data,
        isLoading: isLoading(status),
        isFailed: isFailed(status),
        isSuccess: isSuccess(status),
        getWeatherForecastHandler,
    }
}

export default useWeatherForecastContainer;