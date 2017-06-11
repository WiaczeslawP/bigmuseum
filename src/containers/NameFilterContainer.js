import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getNameFilter} from 'selectors/selectors';
import {setNameFilter} from 'actions/actions';
import NameFilter from 'components/NameFilter'

const mapStateToProps = (state) => ({
	name: getNameFilter(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
	setNameFilter,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NameFilter);
