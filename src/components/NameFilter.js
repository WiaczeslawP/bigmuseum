import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {FormControl} from 'react-bootstrap';

export default class NameFilter extends PureComponent {
	static propTypes = {
		name: PropTypes.string.isRequired,
		setNameFilter: PropTypes.func.isRequired,
	}

	handleChange = (event) => this.props.setNameFilter(event.target.value)

	render() {
		return (
			<FormControl
				value={this.props.name}
				onChange={this.handleChange}
				placeholder="поиск"
				type="text"
			/>
		);
	}
}
