import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SearchForm.scss';

 class SearchForm extends Component {
     state = {
         searchValue:''
     }

     handleSearchInput = (e) => {
         this.setState({
             searchValue: e.target.value
         })
     }
    render() {
        return (
            <form className="nav-search-form">
                <input onChange={this.handleSearchInput} type="text" placeholder="search..."/>
                <Link to={`/:${this.state.searchValue}`}>
                    <button>SEARCH</button>
                </Link>
            </form>
        )
    }
}

export default SearchForm