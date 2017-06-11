import {createAction} from 'redux-actions';
import * as actions from './../constants';

export const setNameFilter = createAction(
	actions.SET_NAME_FILTER,
	nameFilter => ({nameFilter}),
);

export const setLocationFilter = createAction(
	actions.SET_LOCATION_FILTER,
	locationFilter => ({locationFilter}),
);

export const setCurrentPage = createAction(
	actions.SET_CURRENT_PAGE,
	currentPage => ({currentPage}),
);

export const addExhibit = createAction(
	actions.ADD_EXHIBIT,
	exhibit => ({exhibit}),
);
