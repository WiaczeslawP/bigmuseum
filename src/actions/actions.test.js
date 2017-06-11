import {setNameFilter, setLocationFilter, setCurrentPage, addExhibit} from './actions';

describe('setNameFilter', function () {
	it('should have a type of "SET_NAME_FILTER"', function() {
		expect(setNameFilter().type).toEqual('SET_NAME_FILTER');
	});

	it('should pass on the location we pass in', function() {
		const nameFilter = 'Фотоаппарат';
		expect(setNameFilter(nameFilter).payload.nameFilter).toEqual(nameFilter);
	});
});

describe('setLocationFilter', function () {
	it('should have a type of "SET_LOCATION_FILTER"', function() {
		expect(setLocationFilter().type).toEqual('SET_LOCATION_FILTER');
	});

	it('should pass on the location we pass in', function() {
		const locationFilter = 'Париж';
		expect(setLocationFilter(locationFilter).payload.locationFilter).toEqual(locationFilter);
	});
});

describe('setCurrentPage', function () {
	it('should have a type of "SET_CURRENT_PAGE"', function() {
		expect(setCurrentPage().type).toEqual('SET_CURRENT_PAGE');
	});

	it('should pass on the location we pass in', function() {
		const currentPage = 3;
		expect(setCurrentPage(currentPage).payload.currentPage).toEqual(currentPage);
	});
});

describe('addExhibit', function () {
	it('should have a type of "ADD_EXHIBIT"', function() {
		expect(addExhibit().type).toEqual('ADD_EXHIBIT');
	});

	it('should pass on the location we pass in', function() {
		const exhibit = {name: 'Фотоаппарат'};
		expect(addExhibit(exhibit).payload.exhibit).toEqual(exhibit);
	});
});
