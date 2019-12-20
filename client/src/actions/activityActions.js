import { GET_ACTIVITIES } from './types';
import axios from 'axios';

export const getActivities = (itineraryId) => async dispatch => {
    await axios
        .get(`http://localhost:5000/activities/${itineraryId}`)
        .then(res => dispatch({
            type: GET_ACTIVITIES,
            payload: res.data
        }))
}