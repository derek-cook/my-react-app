import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          {/*<!-- Brand and toggle get grouped for better mobile display -->*/}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            {/* <a className="navbar-brand" href="#">My React App</a> */}
          </div>

          {/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><NavLink to="/"><span className="glyphicon glyphicon-home"></span></NavLink></li>
              <li><NavLink to="/employees">Employees</NavLink></li>
              <li><NavLink to="/schedule">Schedule</NavLink></li>
              {/* <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span className="glyphicon glyphicon-plus"></span><span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Add Employee</a></li>
                </ul>
              </li> */}
            </ul>
            {/*<form className="navbar-form navbar-left">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search"/>
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">Login</a></li>
            </ul>*/}
          </div>{/*<!-- /.navbar-collapse -->*/}
        </div>{/*<!-- /.container-fluid -->*/}
      </nav>
    );
  }
}

export default Navbar;

