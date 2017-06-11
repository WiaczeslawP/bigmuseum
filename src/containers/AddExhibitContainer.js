import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addExhibit} from 'actions/actions';
import AddExhibit from 'components/AddExhibit';

const mapDispatchToProps = (dispatch) => bindActionCreators({
	addExhibit,
}, dispatch);

export default connect(null, mapDispatchToProps)(AddExhibit);
