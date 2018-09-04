export default function(state={},action){
    switch(action.type){
        case 'GET_UPCOMING':
            return {...state,upcoming:action.payload}
        default : 
            return state
    }
}