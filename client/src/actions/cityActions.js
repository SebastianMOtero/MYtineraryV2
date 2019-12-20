import { GET_CITIES, DATA_LOADING, GET_ITINERARIES, GET_CITY, ADD_CITY } from './types';
import axios from 'axios';
//asd
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;

export const getCity = (cityId) => async dispatch => {console.log(cityId)
    await axios 
        .get(`http://localhost:5000/cities/city/${cityId}`)
        .then(res => dispatch({
            type: GET_CITY,
            payload: res.data
        }))
}

export const getCities = () => async dispatch => {
    console.log('city Action');
    console.log(localStorage.getItem("token"));
    dispatch(citiesLoading()); 
    await axios
        .get('http://localhost:5000/cities/all', { headers: { Authorization: "Bearer " + localStorage.getItem("token") }})
        .then(res => dispatch({
            type: GET_CITIES,
            payload: res.data
        }))
}

export const citiesLoading = () => {
    return {
        type: DATA_LOADING 
    }
}

export const getItineraries = (cityId) => async dispatch => {
    dispatch(itinerariesLoading(cityId));
    await axios
        .get('http://localhost:5000/itineraries/' + cityId)
        .then(res => dispatch({
            type: GET_ITINERARIES,
            payload: res.data
        }))
}

export const itinerariesLoading = () => {
    return {
        type: DATA_LOADING 
    }
}

export const addCity = (cityData) => async dispatch => {
    await axios
        .post('http://localhost:5000/cities/add', cityData )
        .then( res => dispatch({
            type: ADD_CITY,
            payload: res.data
        }))
        .catch( (err) => console.log(err))
}