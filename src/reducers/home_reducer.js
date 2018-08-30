export default function(state={},action){
    switch(action.type){
        case 'GET_POPULAR':
            return {...state,popular:action.payload}
        case 'GET_SLIDER':
            return {...state,slider:action.payload}
        default : 
            return state
    }
}