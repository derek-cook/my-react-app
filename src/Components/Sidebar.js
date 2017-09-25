import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar" data-color="purple" data-image="assets/img/sidebar-5.jpg">

    {/* <!--   you can change the color of the sidebar using: data-color="blue | azure | green | orange | red | purple" --> */}


                <div className="sidebar-wrapper">
                    <div className="logo">
                        <a href="/" className="simple-text">
                            React App
                        </a>
                    </div>

                    <ul className="nav">
                        <li>
                            <a href="dashboard.html">
                                <i className="pe-7s-graph"></i>
                                <p>Dashboard</p>
                            </a>
                        </li>
                        <li>
                            <a href="user.html">
                                <i className="pe-7s-user"></i>
                                <p>User Profile</p>
                            </a>    {/* <!--   you can change the color of the sidebar using: data-color="blue | azure | green | orange | red | purple" --> */}

                        </li>
                        <li className="active">
                            <a href="table.html">
                                <i className="pe-7s-note2"></i>
                                <p>Table List</p>
                            </a>
                        </li>
                        <li>
                            <a href="typography.html">
                                <i className="pe-7s-news-paper"></i>
                                <p>Typography</p>
                            </a>
                        </li>
                        <li>
                            <a href="icons.html">
                                <i className="pe-7s-science"></i>
                                <p>Icons</p>
                            </a>
                        </li>
                        <li>
                            <a href="maps.html">
                                <i className="pe-7s-map-marker"></i>
                                <p>Maps</p>
                            </a>
                        </li>
                        <li>
                            <a href="notifications.html">
                                <i className="pe-7s-bell"></i>
                                <p>Notifications</p>
                            </a>
                        </li>
                        <li className="active-pro">
                            <a href="upgrade.html">
                                <i className="pe-7s-rocket"></i>
                                <p>Upgrade to PRO</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;