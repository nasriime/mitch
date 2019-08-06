import { FETCH_PRODUCTS, SEARCH_PRODUCTS }  from '../actions/types'

const initialState = {
    items: [],
    loading: false
}

export default function( state = initialState, action){
    switch( action.type ){
        case FETCH_PRODUCTS:
            return {
                ...state,
                items: action.payload
            }
        case SEARCH_PRODUCTS:
            return {
                ...state,
                items: action.payload
            }
        case START_LOADING:
            return {
                ...state,
                loading: action.payload
            }  
        case STOP_LOADING:
            return {
                ...state,
                loading: action.payload
            }       
        default:
            return state;
    }
}