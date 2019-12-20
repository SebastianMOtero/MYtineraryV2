import { GET_COMMENT, ADD_COMMENT } from './types';
import axios from 'axios';


export const getComments = (itineraryId) => async dispatch => {

    console.log(localStorage.getItem("token"));
 
    await axios
        .get( `http://localhost:5000/comments/${itineraryId}` )
        .then(res => dispatch({
            type: GET_COMMENT,
            payload: res.data
        }))
}

export const addComment = (data) => async dispatch => {
    console.log(data);
    await axios
        .post('http://localhost:5000/comments/newComment', data)
        .then( res => dispatch({
            type: ADD_COMMENT,
            payload: res.data
        }))
}