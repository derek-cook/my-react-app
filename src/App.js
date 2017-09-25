import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Sidebar from './Components/Sidebar';

class App extends Component {

  


  render() {
    
    
    
    return (
      <div className="App">
        <div className="app-router-container">
        <Route path="/" component={Sidebar}></Route>
        <div className="main-panel">
          <Route path="/" component={Layout}></Route>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
