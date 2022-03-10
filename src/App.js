import "./App.css";
import WeatherForecast from "./pages/WeatherForecast";
import {Provider} from "react-redux";
import {storeInstance} from "./storage/config";

const App = () => (
    <Provider store={storeInstance}>
        <WeatherForecast/>
    </Provider>
)

export default App;
