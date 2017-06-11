import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Paginator from 'react-pagify';
import pagifyBootstrapPreset from 'react-pagify-preset-bootstrap';
import segmentize from 'segmentize';

export default class Pagination extends PureComponent {
	static propTypes = {
		page: PropTypes.number.isRequired,
		pages: PropTypes.number.isRequired,
		setCurrentPage: PropTypes.func.isRequired,
	}

	handleSelect = (newPage, event) => {
		event.preventDefault();
		this.props.setCurrentPage(newPage);
	}

	render() {
		const {page, pages} = this.props;

		return pages > 1 ? (
			<div className="flex flex--justify-content_center">
				<Paginator.Context
					{...pagifyBootstrapPreset}
					segments={segmentize({
						pages,
						page,
						beginPages: 1,
						endPages: 1,
						sidePages: 3
					})}
					onSelect={this.handleSelect}
				>
					<Paginator.Segment field="beginPages" />
					<Paginator.Ellipsis previousField="beginPages" nextField="previousPages" />
					<Paginator.Segment field="previousPages" />
					<Paginator.Segment field="centerPage" className="active" />
					<Paginator.Segment field="nextPages" />
					<Paginator.Ellipsis previousField="nextPages" nextField="endPages" />
					<Paginator.Segment field="endPages" />
				</Paginator.Context>
			</div>
		) : null;
	}
}
