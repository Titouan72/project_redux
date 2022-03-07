import axios from "axios";
import { configureStore } from '@reduxjs/toolkit'
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";


async function fetchUsers() {
    var result = await axios.get('https://621ca3c5768a4e1020b0902b.mockapi.io/Users') 
        .then(({ data }) => {
            dispatch(setUsersDetails(data), {type: 'FETCHING_DATA_INIT'});
            if (result.status != 200) {
                dispatch(setUsersDetails(data), {type: 'FETCHING_DATA_ERROR'});
                return false;
            }
            dispatch(setUsersDetails(data), {type: 'FETCHING_DATA_SUCCESS'});
            return result.data;
        })
}


export default fetchUsers;