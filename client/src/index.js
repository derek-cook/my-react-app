import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';

let appStore = store.createStore();

appStore.subscribe(() => {
	console.log("STORE CHANGE: ", appStore.getState());
});

ReactDOM.render((
	<Provider store={ appStore }> 
		<Router>
			<App/>
		</Router>
	</Provider>
	), document.getElementById('root'));
registerServiceWorker();
