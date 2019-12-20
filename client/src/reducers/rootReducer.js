import { combineReducers } from 'redux';
import cityReducer from './cityReducer';
import itineraryReducer from './itineraryReducer';
import userReducer from './userReducer';
import activityReducer from './activityReducer';
import commentReducer from './commentReducer';

const rootReducer = combineReducers(
    {
        //Coloco los reducer a combinar
        //cities: citiesReducer
        //nombre con el que voy a usar:  reducer que asocia
        cityReducer,
        itineraryReducer,
        userReducer,
        activityReducer,
        commentReducer
    }
)

export default rootReducer;