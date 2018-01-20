import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as actions from 'constants/actionTypes';

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-light">
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        {/* <Link to="/">Home</Link> */}
                    </li>
                </ul>
            </nav>
        );
    }
}
