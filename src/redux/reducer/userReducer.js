
const userReducer = (state='',action) => {
    switch(action.type){
        case "CHANGE_NAME":
            return {...state, name: action.payload}
        case "CHANGE_ID":
            return {...state, userId: action.payload}
        default :
            return state;

    }
}

export default userReducer;