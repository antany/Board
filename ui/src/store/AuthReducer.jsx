const initialState={
    token:""
}

const authReducer = (state=initialState, action)=>{
    switch(action.type){
        case 'UPDATE':
            return {
                ...state,
                [action.name]:action.value
            };
        default:
            return state;    
    }
}

export default authReducer;