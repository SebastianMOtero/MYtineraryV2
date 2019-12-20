import { CREATE_ACCOUNT, LOG_OUT, LOG_IN, LOGIN_SUCCESS, ADD_FAVOURITE, REM_FAVOURITE } from '../actions/types';

const initialState = {
    isLogged : false,
    user: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case CREATE_ACCOUNT:
            console.log('reducer')
            return {
                ...state
            };
            case LOG_OUT:
                localStorage.removeItem('token')
                return {
                    ...state,
                    isLogged: false,
                    user: []
                }
            case LOG_IN: 
                localStorage.setItem('token', action.payload.data.token);
                return {
                    ...state,
                    isLogged: (action.payload.status === 200),
                }
            case LOGIN_SUCCESS: console.log(action.payload);
                localStorage.setItem('token', action.payload.token);
                console.log(action.payload.user)
                return {
                    ...state,
                    user: action.payload.user,
                    isLogged: true
                }
            case ADD_FAVOURITE: console.log(action.payload);
                return {
                    ...state,
                    user: action.payload
                }
            case REM_FAVOURITE:console.log(action.payload);
                return {
                    ...state,
                    user: action.payload
                }
        default:
            return state;
    }
}