import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class Root extends Component {
	render() {
		return (
			<App />
		)
	}
}


render(<Root />, document.getElementById('root'));
registerServiceWorker();
