import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DashboardHome from './components/DashboardHome';
import EmployeeTable from './components/EmployeeTable';
import EmployeeDetail from './components/EmployeeDetail';
import Schedule from './components/Schedule';

import { Route } from 'react-router-dom';


class Layout extends Component {

  render() {
    var tableItems = [];

    return (
      <div className="layout">
        <Navbar/>
        <div className="container main-content">
          <Route exact path="/" component={DashboardHome}></Route>
          <Route path="/employees" render={(props) =>
            <div className="employee-view container-fluid row">
              <EmployeeTable {...props} className="employee-table" title="Employees" items={tableItems} handleNotification={this.props.handleNotification}/>
              <EmployeeDetail/>
            </div>}>
          </Route>
          <Route path="/schedule" component={Schedule}></Route>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Layout;

