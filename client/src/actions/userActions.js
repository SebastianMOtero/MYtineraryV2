import { CREATE_ACCOUNT, LOG_IN, LOG_OUT, LOG_IN_GOOGLE, LOGIN_SUCCESS,
        ADD_FAVOURITE, REM_FAVOURITE } from './types';
import axios from 'axios';

export const addFavourite = (data) => async dispatch => { console.log(data);
    await axios
        .post('http://localhost:5000/users/newFavourite', data)
        .then( res => dispatch({
            type: ADD_FAVOURITE,
            payload: res.data
        }))
        .catch( (err) => console.log(err))
}

export const remFavourite = (data) => async dispatch => {
    await axios
        .post('http://localhost:5000/users/removeFavourite', data)
        .then( res => dispatch({
            type: REM_FAVOURITE,
            payload: res.data
        }))
        .catch( (err) => console.log(err))
}

export const createAccount = (userData) => async dispatch => {
    console.log(userData);
    await axios
        .post('http://localhost:5000/users/signup', userData)
        .then( res => dispatch({
            type: CREATE_ACCOUNT,
            payload: res.data
        }))
        .catch( (err) => console.log(err))
}

export const logIn = (userData) => async dispatch => {
    await axios
        .post('http://localhost:5000/users/login', userData)
        .then( res => {
            dispatch({ 
            type: LOG_IN, 
            payload: res
        })})
}

export const logInGoogle = (userData) => async dispatch => {
        dispatch({
            type: LOG_IN_GOOGLE,
            payload: userData
        })
}

export const logOut = () => async dispatch => { console.log("LOGOUT");
    dispatch({
        type: LOG_OUT
    })
}

//RECIBE TOKEN, LO MANDA AL BACK PARA COMPROBAR Y TRAE USUARIO QUE LE PERTENEZCA TOKEN
export const IdentifyUser = (token) => async dispatch => {
    await axios
        .get('http://localhost:5000/users/identifyuser',
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        .then( ({data})=> {
            console.log(data);
            console.log(token);
            const user = {
                user: data.data,
                token: token
            }
            dispatch({
                type: LOGIN_SUCCESS,
                payload: user
            });
        })
        .catch( (err) => {
            console.log(err);
        })
    
    //User Loading
//     dispatch({
//       type: USER_LOADING
//     });
  
//     try {
//       const { data, status } = await axios.get(
//         'http://localhost/5001/api/users/user',
//         tokenConfig(getState)
//       );
//       dispatch({
//         type: USER_LOADED,
//         payload: data
//       });
//     } catch (error) {
//       dispatch(returnErrors(error.response.data, error.response.status));
//       dispatch({
//         type: AUTH_ERROR
//       });
//     }
  };