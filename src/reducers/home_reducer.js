export default function(state={},action){
    switch(action.type){
        case 'GET_POPULAR':
            return {...state,popular:action.payload}
        default : 
            return state
    }
}