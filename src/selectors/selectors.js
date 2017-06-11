import {createSelector} from 'reselect';
import {map, uniq, compose, filter, slice, join} from 'ramda';
import {ITEMS_PER_PAGE} from './../constants';

export const getExhibits = state => state.reducer.exhibits;
export const getNameFilter = state => state.reducer.nameFilter;
export const getLocationFilter = state => state.reducer.locationFilter;
export const getCurrentPage = state => state.reducer.currentPage;

export const formatLocation = ({city, country}) => compose(
	join(', '),
	filter(v => !!v),
)([city, country]);
export const hasLocation = ({city, country}) => !!city || !!country;

export const filterByTitle = (title, searchValue) => {
    if (!searchValue) return true;
    return new RegExp(`^${searchValue}`, 'i').test(title);
};
export const filterByLocation = (location, locationFilter) =>
	!locationFilter || formatLocation(location) === locationFilter;

export const getFilteredExhibits = createSelector(
	[getExhibits, getNameFilter, getLocationFilter],
	(exhibits, nameFilter, locationFilter) =>
		compose(
			filter(exhibit => filterByTitle(exhibit.name, nameFilter)),
			filter(exhibit => filterByLocation(exhibit, locationFilter)),
		)(exhibits),
);

export const getVisibleExhibits = createSelector(
	[getFilteredExhibits, getCurrentPage],
	(exhibits, currentPage) => slice(
		ITEMS_PER_PAGE * (currentPage - 1),
		ITEMS_PER_PAGE * currentPage,
		exhibits,
	),
);

export const getUniqLocations = createSelector(
	[getExhibits],
	compose(uniq, map(formatLocation), filter(hasLocation)),
);

export const getPagesLength = state => Math.ceil(getFilteredExhibits(state).length / ITEMS_PER_PAGE);
