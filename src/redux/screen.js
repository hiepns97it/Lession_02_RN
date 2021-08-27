/*Actions type */
export const CHANGE_SCREEN = "CHANGE_SCREEN";
/*Actions function */
export const changeScreen  = data => {
    return {
        type:CHANGE_SCREEN,
        payload:data
    }
}
const initState = {
    current:'Welcome'
}
/*Reducers */
const reducer = (state  = initState,action)=>{
    switch(action.type){
        case CHANGE_SCREEN:
            return {
                ...state,
                current:action.payload
            }
        default:
            return state;
    }
}
export default reducer;