import {applyMiddleware, compose, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import {storage} from './storage';

const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
export const storeInstance = createStore(storage, undefined, composeEnhancers(applyMiddleware(thunkMiddleware)));
