import { GET_COMMENT, ADD_COMMENT } from '../actions/types';

const initialState = {
    comments: [],
}


export default function(state = initialState, action) {
    switch (action.type) { 
        case ADD_COMMENT:
            let commentAdded = state.comments.push(action.payload.comment)
            return {
                ...state,
                comments: commentAdded
            }
        case GET_COMMENT:  console.log(action.payload)
            return {
                ...state,
                comments: action.payload.comments
                // data: res.data,
                // itineraryId: itineraryId
            }
        default:
            return state; 
    }
}