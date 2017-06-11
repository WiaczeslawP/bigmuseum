import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getPagesLength, getCurrentPage} from 'selectors/selectors';
import {setCurrentPage} from 'actions/actions';
import Pagination from 'components/Pagination';

const mapStateToProps = (state) => ({
	pages: getPagesLength(state),
	page: getCurrentPage(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
	setCurrentPage,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
