import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from './cinema-clapboard.png';
import SearchForm from '../SearchForm/SearchForm'
import './Navigation.scss';


class Navigation extends Component {
    myRef = React.createRef();
    menuRef = React.createRef();
    render() {
       
        const toggleMenuHandler = () => {
            this.myRef.current.classList.toggle('open');
            this.menuRef.current.classList.toggle('open');
        }

        return (
            <header className="nav-panel">
                <div className="logo">
                    <Link to={'/profile/guest'}>
                        <img 
                        src={logo}
                        alt="logo."
                        />
                    </Link>
                </div>
                <SearchForm getParams={this.props.getSearchParam}/>
                <div  onClick={this.onLinkHandler} className="nav-panel-control-list" ref={this.myRef}>
                    <NavLink  to={'/'} activeClassName="active">
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