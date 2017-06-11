import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {pick} from 'ramda';
import {Button, Modal, Form, ControlLabel, FormControl, FormGroup, HelpBlock} from 'react-bootstrap';

const initialState = {
	showModal: false,
	hasSubmitted: false,
	name: '',
	city: '',
	country: '',
	organization: '',
	description: '',
}

export default class AddExhibit extends PureComponent {
	static propTypes = {
		addExhibit: PropTypes.func.isRequired,
	}

	state = initialState

	handleOpenModal = () => this.setState({showModal: true})
	handleCloseModal = () => this.setState(initialState)
	handleChange = event => this.setState({[event.target.name]: event.target.value})

	getValidationState = () => {
		const {hasSubmitted, name} = this.state;
		if (hasSubmitted && name.length === 0) {
			return 'error';
		}
		return null;
	}

	handleSubmit = () => {
		this.setState({hasSubmitted: true}, this.saveExhibit);
	}

	saveExhibit() {
		if (this.getValidationState() !== 'error') {
			this.props.addExhibit(pick(
				['name', 'city', 'country', 'organization', 'description'],
				this.state,
			));
			this.handleCloseModal();
		}
	}

	render() {
		const {showModal, name, city, country, organization, description} = this.state;

		return (
			<div>
				<Button onClick={this.handleOpenModal}>Добавить</Button>

				<Modal show={showModal} onHide={this.handleCloseModal}>
					<Modal.Header closeButton>
						<Modal.Title>Добавление экспоната</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form>
							<FormGroup validationState={this.getValidationState()}>
								<ControlLabel>Название</ControlLabel>
								<FormControl
									name="name"
									value={name}
									onChange={this.handleChange}
									type="text"
								/>
								<HelpBlock>Обязательное поле</HelpBlock>
							</FormGroup>
							<FormGroup>
								<ControlLabel>Город</ControlLabel>
								<FormControl
									name="city"
									value={city}
									onChange={this.handleChange}
									type="text"
								/>
							</FormGroup>
							<FormGroup>
								<ControlLabel>Страна</ControlLabel>
								<FormControl
									name="country"
									value={country}
									onChange={this.handleChange}
									type="text"
								/>
							</FormGroup>
							<FormGroup>
								<ControlLabel>Организация</ControlLabel>
								<FormControl
									name="organization"
									value={organization}
									onChange={this.handleChange}
									type="text"
								/>
							</FormGroup>
							<FormGroup controlId="formControlsTextarea">
								<ControlLabel>Описание</ControlLabel>
								<FormControl
									name="description"
									value={description}
									onChange={this.handleChange}
									componentClass="textarea"
								/>
							</FormGroup>
						</Form>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.handleCloseModal}>Отмена</Button>
						<Button onClick={this.handleSubmit} bsStyle="primary">Сохранить</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}

