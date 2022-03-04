import {CHANGE_NAME,CHANGE_ID,CHANGE_YEAR,CHANGE_MONTH,CHANGE_THEME_DARK,CHANGE_THEME_LIGHT} from "./type"
import axios from "axios"


// export const UpdateName = name => ({type:CHANGE_NAME, payload: name})
export const UpdateID = id => ({type:CHANGE_ID, payload: id})
export const UpdateYear = year => ({ type:CHANGE_YEAR, year })
export const UpdateMonth = month => ({ type:CHANGE_MONTH, month })

// example middleware thunk update name with api

export const UpdateName = () => {
    return (dispatch) => {
        dispatch({ type: CHANGE_NAME });
        return axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
           dispatch({type:CHANGE_NAME, payload: response.data[0].name})
        }).catch(error => {

        })
    }
}

export const darkTheme = data => ({ type : CHANGE_THEME_DARK, data })
export const lightTheme = data => ({ type : CHANGE_THEME_LIGHT, data })