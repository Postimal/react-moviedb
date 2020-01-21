import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './cinema-clapboard.png';
import SearchForm from '../SearchForm/SearchForm'
import './Navigation.scss';


class Navigation extends Component {
    myNavigationPanelRef = React.createRef();
    menuRef = React.createRef();
    render() {
       
        const toggleMenuHandler = () => {
            this.myNavigationPanelRef.current.classList.toggle('open');
            this.menuRef.current.classList.toggle('open');
        }

        return (
            <header className="nav-panel">
                <div className="logo">
                    <a href='#footer'>
                        <img 
                        src={logo}
                        alt="logo."
                        />
                    </a>
                </div>
                <SearchForm />
                <div  onClick={this.onLinkHandler} onMouseDown={toggleMenuHandler} className="nav-panel-control-list" ref={this.myNavigationPanelRef}>
                    <NavLink  to={'/react-moviedb'} activeClassName="active">
                    <button className="main-nav-bottom-section__button">
                        HOME
                    </button>
                    </NavLink>
                    <NavLink to={'/profile'} activeClassName="active">
                    <button className="main-nav-bottom-section__button">
                        USER
                    </button>
                    </NavLink>
                    <NavLink to={'/discover'} activeClassName="active">
                    <button className="main-nav-bottom-section__button">
                        DICOVER
                    </button>
                    </NavLink>
                </div>
                <div className="nav-mobile">
                    <div  onClick={toggleMenuHandler} ref={this.menuRef} className="nav-mobile-trigger"></div>
                </div>
            </header>
        )
    }    
}

export default Navigation