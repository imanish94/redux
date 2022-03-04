import { CHANGE_THEME_DARK,CHANGE_THEME_LIGHT } from "../action/type"

const appReducer = (state='',action) => {
    switch(action.type){
        case CHANGE_THEME_DARK : 
        return {bgColor : "#000", color : "#FFF"}
        case CHANGE_THEME_LIGHT : 
        return {bgColor : "#FFF", color : "#000"}
        default : 
        return state;
    }

}

export default appReducer;