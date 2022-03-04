

const empReducer = (state='',action) => {
    switch(action.type){
        case "CHANGE_MONTH":
            return {...state, month: action.month}
        case "CHANGE_YEAR":
            return {...state, year: action.year}
        default :
            return state;

    }
}

export default empReducer;