import { EXPAND_ITINERARY } from '../actions/types';

const initialState = {
    isExpanded: false,
}

export default function(state = initialState, action) {
    switch (action.type) {
        case EXPAND_ITINERARY:
            return {
                ...state,
                isExpanded: !state.isExpanded
            };
        default:
            return state; 
    }
}