import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Footer extends Component {

  render() {
    return (
      <footer className="footer">
            <div className="container-fluid">
                <nav className="pull-left">
                    <ul>
                        <li>
                            <a href="#">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Company
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="#">
                               Blog
                            </a>
                        </li>
                    </ul>
                </nav>
                <p className="copyright pull-right">
                    &copy; 2016 <a href="#">Derek Cook</a>
                </p>
            </div>
        </footer>
    );
  }
}

export default Footer;

