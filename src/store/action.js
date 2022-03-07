import {
	FETCHING_DATA_INIT,
	FETCHING_DATA_ERROR,
	FETCHING_DATA_SUCCESS,
} from "./actionType";

export const fetchDataInit = () => ({
	type: FETCHING_DATA_INIT,
	text: 'Starting fetching data'
});
export const fetchDataError = () => ({
	type: FETCHING_DATA_ERROR,
	text: 'Can not fetch data'
});
export const fetchDataSuccess = () => ({
	type: FETCHING_DATA_SUCCESS,
	text: 'Data goodly fetched'
});