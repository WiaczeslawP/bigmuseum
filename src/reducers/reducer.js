import {handleActions} from 'redux-actions';
import * as actions from './../constants';
import exhibits from 'data.json';

export const initialState = {
	exhibits,
	nameFilter: '',
	locationFilter: '',
	currentPage: 1,
};

export default handleActions({
	[actions.SET_NAME_FILTER]: (state, action) => ({
		...state,
		nameFilter: action.payload.nameFilter,
		currentPage: 1,
	}),
	[actions.SET_LOCATION_FILTER]: (state, action) => ({
		...state,
		locationFilter: action.payload.locationFilter,
		currentPage: 1,
	}),
	[actions.SET_CURRENT_PAGE]: (state, action) => ({
		...state,
		currentPage: action.payload.currentPage,
	}),
	[actions.ADD_EXHIBIT]: (state, action) => ({
		...state,
		exhibits: [...state.exhibits, action.payload.exhibit],
	}),
}, initialState);
