import { FETCH_PRODUCTS, SEARCH_PRODUCTS, START_LOADING, STOP_LOADING } from './types'
import axios from 'axios'


export const startLoading = () => dispatch => {
    dispatch({
        type: START_LOADING,
        payload: true
    })    
}

export const stopLoading = () => dispatch => {
    dispatch({
        type: STOP_LOADING,
        payload: false
    })    
}

export const fetchProducts = () => dispatch => {
    axios.get('http://localhost:4000/products')
        .then( response => {
                dispatch({
                    type: FETCH_PRODUCTS,
                    payload: response.data
                })

                dispatch({
                    type: STOP_LOADING,
                    payload: false
                })   
            }
        )
        .catch( error => {
            console.log(error);
        })
}


export const searchProducts = searchterm => dispatch => {
    axios.get(`http://localhost:4000/getProductsByName?name=${searchterm}`)
    .then( response => 
        dispatch({
            type: SEARCH_PRODUCTS,
            payload: response.data
        })
    )
    .catch( error => {
        console.log(error);
    })
}