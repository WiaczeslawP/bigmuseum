import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getLocationFilter, getUniqLocations} from 'selectors/selectors';
import {setLocationFilter} from 'actions/actions';
import LocationFilter from 'components/LocationFilter';

const mapStateToProps = (state) => ({
	locationFilter: getLocationFilter(state),
	locations: getUniqLocations(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
	setLocationFilter,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LocationFilter);
