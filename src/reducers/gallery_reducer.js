export default function(state={},action){
    switch(action.type){
        case 'GET_GALLERYS':
            return {...state,gallerys:action.payload}
        default : 
            return state
    }
}