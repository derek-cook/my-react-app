import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Footer extends Component {

  render() {
    return (
      <footer className="footer">
      <div className="container">
        <span className="text-muted">Copyright &copy; 2017 Derek Cook</span>
      </div>
    </footer>
    );
  }
}

export default Footer;

