import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Table} from 'react-bootstrap';
import {formatLocation} from 'selectors/selectors';

export default class ExhibitsList extends PureComponent {
	static propTypes = {
		exhibits: PropTypes.arrayOf(PropTypes.shape({
			name: PropTypes.string.isRequired,
			city: PropTypes.string,
			country: PropTypes.string,
			organization: PropTypes.string,
			description: PropTypes.string,
		}).isRequired).isRequired,
	}

	render() {
		const {exhibits} = this.props;

		return (
			<Table condensed>
				<thead>
					<tr>
						<th>Название</th>
						<th>Место создания</th>
						<th>Организация</th>
						<th>Описание</th>
					</tr>
				</thead>
				<tbody>
					{exhibits.map((exhibit, index) =>
						<tr key={index}>
							<td>{exhibit.name}</td>
							<td>{formatLocation(exhibit)}</td>
							<td>{exhibit.organization}</td>
							<td>{exhibit.description}</td>
						</tr>
					)}
				</tbody>
			</Table>
		);
	}
}
