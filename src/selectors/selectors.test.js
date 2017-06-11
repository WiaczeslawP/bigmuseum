import {formatLocation, hasLocation, filterByTitle, filterByLocation, getFilteredExhibits} from './selectors';
import {initialState} from 'reducers/reducer';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore([]);

describe('formatLocation', () => {
	it('should format location with city and country set', function() {
		expect(formatLocation({city: 'Париж', country: 'Франция'})).toBe('Париж, Франция');
	});

	it('should format location with only city set', function() {
		expect(formatLocation({city: 'Париж'})).toBe('Париж');
	});

	it('should format location with only country set', function() {
		expect(formatLocation({country: 'Франция'})).toBe('Франция');
	});

	it('should format location without city and country set', function() {
		expect(formatLocation({})).toBe('');
		expect(formatLocation({city: ''})).toBe('');
		expect(formatLocation({city: undefined})).toBe('');
	});
});

describe('hasLocation', () => {
	it('should return true, if any location set', () => {
		expect(hasLocation({city: 'Париж'})).toBe(true);
		expect(hasLocation({country: 'Франция'})).toBe(true);
		expect(hasLocation({city: 'Париж', country: 'Франция'})).toBe(true);
	});

	it('should return false, if no location set', () => {
		expect(hasLocation({})).toBe(false);
	});
});

describe('filterByTitle', () => {
	it('should return true if string match the value', () => {
		expect(filterByTitle('Париж', 'Па')).toBe(true);
		expect(filterByTitle('Париж', 'па')).toBe(true);
		expect(filterByTitle('Париж', 'Париж')).toBe(true);
		expect(filterByTitle('Париж', '')).toBe(true);
		expect(filterByTitle('', '')).toBe(true);
	});

	it('should return false if string does not match the value', () => {
		expect(filterByTitle('Париж', 'ар')).toBe(false);
		expect(filterByTitle('Париж', 'Лондон')).toBe(false);
	});
});

describe('filterByLocation', () => {
	it('should return true if string match the value', () => {
		expect(filterByLocation({city: 'Париж'}, 'Париж')).toBe(true);
		expect(filterByLocation({city: 'Париж'}, '')).toBe(true);
		expect(filterByLocation({city: 'Париж'}, null)).toBe(true);
	});

	it('should return false if string does not match the value', () => {
		expect(filterByLocation({city: 'Париж'}, 'ар')).toBe(false);
		expect(filterByLocation({city: 'Париж'}, 'Па')).toBe(false);
	});
});

describe('getFilteredExhibits', () => {
	it('should return all exhibitions without filters', () => {
		const store = mockStore({reducer: initialState});
		expect(getFilteredExhibits(store.getState()).length).toBe(6);
	});

	it('should return exhibitions with name filter', () => {
		const store = mockStore({reducer: {...initialState, nameFilter: 'Ф'}});
		expect(getFilteredExhibits(store.getState()).length).toBe(3);
	});

	it('should return exhibitions with location filter', () => {
		const store = mockStore({reducer: {...initialState, locationFilter: 'Париж, Франция'}});
		expect(getFilteredExhibits(store.getState()).length).toBe(1);
	});

	it('should return exhibitions with both filters', () => {
		const store = mockStore({reducer: {...initialState, nameFilter: 'Ф', locationFilter: 'Париж, Франция'}});
		expect(getFilteredExhibits(store.getState()).length).toBe(1);
	});

	it('should return empty array with unconvenient filters', () => {
		const store = mockStore({reducer: {...initialState, nameFilter: 'Ы', locationFilter: 'Париж, Франция'}});
		expect(getFilteredExhibits(store.getState()).length).toBe(0);
	});
})
