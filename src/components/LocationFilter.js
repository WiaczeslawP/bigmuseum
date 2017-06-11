import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {FormControl} from 'react-bootstrap';

export default class LocationFilter extends PureComponent {
	static propTypes = {
		locationFilter: PropTypes.string.isRequired,
		locations: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
		setLocationFilter: PropTypes.func.isRequired,
	}

	handleChange = (event) => this.props.setLocationFilter(event.target.value)

	render() {
		const {locationFilter, locations} = this.props;

		return (
			<FormControl
				value={locationFilter}
				componentClass="select"
				onChange={this.handleChange}
			>
				<option value={''} key={0}>
					Место создания
				</option>
				{locations.map(location =>
					<option value={location} key={location}>
						{location}
					</option>
				)}
			</FormControl>
		);
	}
}
