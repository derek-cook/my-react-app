import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';

const store = createStore();

ReactDOM.render((
	<Router>
		<App/>
	</Router>
	), document.getElementById('root'));
registerServiceWorker();
