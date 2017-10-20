import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import NotificationSystem from 'react-notification-system';
import style from './assets/variables/Variables.jsx';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      _notificationSystem: null
    }

    this.displayNotification = this.displayNotification.bind(this);
  }

  componentDidMount(){
    this.setState({_notificationSystem: this.refs.notificationSystem})
  }

  displayNotification(notification) {
    console.log("DISPLAYING NOTIFICATION");
    this.state._notificationSystem.addNotification(notification);
  }

  render() {

    return (
      <div className="App">
        <div className="row">
          <div className="col-xs-11 col-sm-4 fadeInDown">
              <NotificationSystem ref="notificationSystem" style={style}/>
          </div>
        </div>
        <div className="app-router-container">
          <Route path="/" render={(props) => 
            <Layout handleNotification={this.displayNotification}/>}>
          </Route>
        </div>
      </div>
    );
  }
}

export default App;
