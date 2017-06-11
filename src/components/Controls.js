import React, {PureComponent} from 'react';
import NameFilterContainer from 'containers/NameFilterContainer';
import LocationFilterContainer from 'containers/LocationFilterContainer';
import AddExhibitContainer from 'containers/AddExhibitContainer';
import {Form} from 'react-bootstrap';

export default class Controls extends PureComponent {
	render() {
		return (
			<div className="flex flex--justify-content_space-between">
				<Form inline>
					<NameFilterContainer />{' '}
					<LocationFilterContainer />
				</Form>
				<AddExhibitContainer />
			</div>
		);
	}
}
