import { GET_CITIES, DATA_LOADING, GET_ITINERARIES, GET_CITY, ADD_CITY } from '../actions/types';

const initialState = {
    cities: [],
    loading: false,
    city: []
}

export default function(state = initialState, action) {
    // {
    //     type: GET_CITIES,
    //     payload: res.data
    // }
    switch (action.type) {
        case ADD_CITY:
            return {
                ...state
            }
        case GET_CITY: console.log('qwe');console.log(action.payload)
            return {
                ...state,
                city: action.payload
            }
        case GET_CITIES:
            return {
                ...state,
                cities: action.payload,
                loading: false
            };
        case GET_ITINERARIES:
            return {
                ...state,
                itineraries: action.payload,
                loading: false
            }
        case DATA_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state; 
    }
}