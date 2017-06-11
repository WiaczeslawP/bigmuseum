import {connect} from 'react-redux';
import {getVisibleExhibits} from 'selectors/selectors';
import ExhibitsList from 'components/ExhibitsList';

const mapStateToProps = (state) => ({
	exhibits: getVisibleExhibits(state),
});

export default connect(mapStateToProps)(ExhibitsList);
