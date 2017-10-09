import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

import {
    Router,
    Route,
    Switch
} from 'react-router-dom';

import App from './containers/App/App.jsx';

import './assets/css/bootstrap.min.css';
import './assets/css/animate.min.css';
import './assets/sass/light-bootstrap-dashboard.css';
// import './assets/css/demo.css';
import './assets/css/pe-icon-7-stroke.css';



const history = createBrowserHistory();

ReactDOM.render((
    <Router history={history}>
        <Switch>
            <Route path="/" name="Home" component={App}/>
        </Switch>
    </Router>
),document.getElementById('root'));
