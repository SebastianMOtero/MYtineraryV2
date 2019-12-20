import { GET_ACTIVITIES } from '../actions/types';

const initialState = {
    activities: [],
}


export default function(state = initialState, action) {
    // {
    //     type: GET_CITIES,
    //     payload: res.data
    // }
    switch (action.type) { 
        case GET_ACTIVITIES: console.log('activityREDUCER'); console.log(action.payload.activities)
            return {
                ...state,
                activities: action.payload.activities
                // data: res.data,
                // itineraryId: itineraryId
            }
        default:
            return state; 
    }
}