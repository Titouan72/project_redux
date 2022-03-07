import {
	FETCHING_DATA_INIT,
	FETCHING_DATA_ERROR,
	FETCHING_DATA_SUCCESS,
} from "./actionType";

const reducer = (state, action) => {
    switch (action.type) {
        case FETCHING_DATA_INIT:
            return {
                ...state,
                isLoading: true,
                error: null, // reseting the error
                text: 'Starting fetching data'
            }
        case FETCHING_DATA_ERROR:
            return {
                ...state,
                isLoading: false,
                //error: action.error, // setting the error
                error: 'Error', // setting the error
                text: 'Can not fetch data'
            }
        case FETCHING_DATA_SUCCESS:
            return {
                ...state,
                isLoading: true,
                error: null, // reseting the error as well
                text: 'Data goodly fetched'
            }
    }
}