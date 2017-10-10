import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DashboardHome from './components/DashboardHome';
import EmployeeTable from './components/EmployeeTable';
import Schedule from './components/Schedule';

import { Route } from 'react-router-dom';


class Layout extends Component {

  render() {
    var tableItems = [];

    return (
      <div className="layout">
        <Navbar/>
        <Route exact path="/" component={DashboardHome}></Route>
        <Route path="/employees" render={(props) => 
          <EmployeeTable {...props} title="Employees" items={tableItems}/>}>
        </Route>
        <Route path="/schedule" component={Schedule}></Route>
        <Footer/>
      </div>
    );
  }
}

export default Layout;

