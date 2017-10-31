import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import allReducers from './reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(allReducers);
store.subscribe(() => {
	console.log("STORE CHANGE: ", store.getState());
})

ReactDOM.render((
	<Provider store={store}> 
		<Router>
			<App/>
		</Router>
	</Provider>
	), document.getElementById('root'));
registerServiceWorker();
