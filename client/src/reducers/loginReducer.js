import { LOG_IN } from '../actions/types';

const initialState = {
    isLogged : false,
    user: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case LOG_IN: 
            return {
                ...state,
                isLogged: true,
                user: action.payload
            }
        default:
            return state;
    }
}