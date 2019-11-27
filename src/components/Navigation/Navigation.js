import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from './cinema-clapboard.png';
import SearchForm from '../SearchForm/SearchForm'

import './Navigation.scss';


 class Navigation extends Component {
    render() {
        return (
            <div className="nav-panel">
                <div className="logo">
                    <Link to={'/profile/guest'}>
                        <img 
                        src={logo}
                        alt="logo."
                        />
                    </Link>
                </div>
                <SearchForm/>
                <div className="nav-panel-control-list">
                    <NavLink  to={'/'} activeClassName="active">
                    <button className="main-nav-bottom-section__button">
                        HOME
                    </button>
                    </NavLink>

                    <NavLink to={'/log-in'} activeClassName="active">
                    <button className="main-nav-bottom-section__button">
                        LOGIN
                    </button>
                    </NavLink>
                    <NavLink to={'/discover'} activeClassName="active">
                    <button className="main-nav-bottom-section__button">
                        DICOVER
                    </button>
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default Navigation