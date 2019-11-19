import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';
import logo from './cinema-clapboard.png';
import SearchForm from '../SearchForm/SearchForm'

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
                        {/* {can be font-awesome} */}
                    </button>
                    </Link>

                    <Link to={'/profile'}>
                    <button className="main-nav-bottom-section__button">
                    </button>
                    </Link>

                    <Link to={'/discover'}>
                    <button className="main-nav-bottom-section__button">
                    </button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Navigation