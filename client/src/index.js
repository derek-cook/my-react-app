import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';

store.subscribe(() => {
	console.log("STORE CHANGE: ", store.getState());
})

ReactDOM.render((
	<Provider store={ store.createStore() }> 
		<Router>
			<App/>
		</Router>
	</Provider>
	), document.getElementById('root'));
registerServiceWorker();
