import { createStore, combineReducers, applyMiddleware } from "redux"; //add combineReducers for multiple reducer
import userReducer from "./reducer/userReducer";
import empReducer from "./reducer/empReducer";
import appReducer from "./reducer/appReducer";
import thunk from "redux-thunk";
import logger from "redux-logger"
import { composeWithDevTools } from 'redux-devtools-extension';
import initalState from "./reducer/intialState"

//example for combineReducers 
const mainReducer = combineReducers({
    userReducer,
    empReducer,
    appReducer
})

const middleware = [thunk]
middleware.push(logger) 

const store = createStore(mainReducer,initalState,composeWithDevTools(applyMiddleware(...middleware)));

//for single reducer
// const store = createStore(userReducer);


export default store