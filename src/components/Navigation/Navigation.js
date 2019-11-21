import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './cinema-clapboard.png';
import SearchForm from '../SearchForm/SearchForm'

import './Navigation.scss';


 class Navigation extends Component {
    render() {
        return (
            <div className="nav-panel">
                <div className="logo">
                    <Link to={'/'}>
                        <img 
                        src={logo}
                        alt="logo."
                        />
                    </Link>
                </div>
                <SearchForm/>
                <div className="nav-panel-control-list">
                    <Link to={'/'}>
                    <button className="main-nav-bottom-section__button">
                        HOME
                    </button>
                    </Link>

                    <Link to={'/login'}>
                    <button className="main-nav-bottom-section__button">
                        LOGIN
                    </button>
                    {/* moze zmienie to na navlink i dam poza home zeby navi bylo zawsze dostępne */}
                    </Link>
                    <Link to={'/discover'}>
                    <button className="main-nav-bottom-section__button">
                        DICOVER
                    </button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Navigation