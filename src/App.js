import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Layout from './Layout';


class App extends Component {

  


  render() {

    

    return (
      <div className="App">
        <div className="app-router-container">
          <Route path="/" component={Layout}>
          </Route>
        </div>
      </div>
    );
  }
}

export default App;
