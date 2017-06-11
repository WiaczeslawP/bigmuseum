import React, {PureComponent} from 'react';
import {Provider} from 'react-redux';
import configureStore from 'store/configureStore';
import 'bootstrap/dist/css/bootstrap.css';
import ExhibitsListContainer from 'containers/ExhibitsListContainer';
import PaginationContainer from 'containers/PaginationContainer';
import Controls from 'components/Controls';
import {Panel} from 'react-bootstrap';

const store = configureStore({});

export default class App extends PureComponent {
	render() {
		return (
			<Provider store={store}>
				<div style={{margin: '10px'}}>
					<Panel header="Музейные экспонаты">
						<Controls />
						<PaginationContainer />
						<ExhibitsListContainer />
						<PaginationContainer />
					</Panel>
				</div>
			</Provider>
		);
	}
}
