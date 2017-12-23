import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';

let reduxStore = store.createStore();

reduxStore.subscribe(() => {
	console.log("STORE CHANGE: ", reduxStore.getState());
});

ReactDOM.render((
	<Provider store={ reduxStore }> 
		<Router>
			<App/>
		</Router>
	</Provider>
	), document.getElementById('root'));
registerServiceWorker();
