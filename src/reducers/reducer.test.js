import reducer, {initialState} from './reducer';
import {last, dropLast} from 'ramda';

describe('Reducer', () => {
	it('returns proper initial state', () => {
		expect(reducer(undefined, {})).toEqual(initialState);
	});

	it('sets the name filter', () => {
		const nameFilter = 'Фотоаппарат';
		const reducerInstance = reducer(undefined, {type: 'SET_NAME_FILTER', payload: {nameFilter}});
		expect(reducerInstance.nameFilter).toBe(nameFilter);
	});

	it('sets the location filter', () => {
		const locationFilter = 'Париж';
		const reducerInstance = reducer(undefined, {type: 'SET_LOCATION_FILTER', payload: {locationFilter}});
		expect(reducerInstance.locationFilter).toBe(locationFilter);
	});

	it('sets the current page', () => {
		const currentPage = 3;
		const reducerInstance = reducer(undefined, {type: 'SET_CURRENT_PAGE', payload: {currentPage}});
		expect(reducerInstance.currentPage).toBe(currentPage);
	});

	it('adds exhibit', () => {
		const exhibit = {name: 'Фотоаппарат'};
		const {exhibits: exhibitsBefore} = reducer(undefined, {});
		const {exhibits: exhibitsAfter} = reducer(undefined, {type: 'ADD_EXHIBIT', payload: {exhibit}});

		expect(exhibitsAfter.length).toBe(exhibitsBefore.length + 1);
		expect(last(exhibitsAfter)).toEqual(exhibit);
		expect(dropLast(1, exhibitsAfter)).toEqual(exhibitsBefore);
	})
});
