import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './SearchResults.scss';
import Spinner from '../Spinner/Spinner'

 class SearchResults extends Component {
     state = {
         SearchResults: null,
         page:1,
         isLoading: false,
     }


     componentDidMount() {
         this.setState({isLoading: true})
        fetch(`https://api.themoviedb.org/3/search/multi?api_key=12a5356516535d4d67654a936a088c1b&language=en-US&query=${this.props.match.params.id}&page=${this.state.page}&include_adult=false`)
        .then(res => res.json())
        .then(data => this.setState({SearchResults: data, isLoading:false}))
      }

    render() {
        const {isLoading, SearchResults } = this.state;

        // const movieItem = {SearchResult.map(item =>)}
        
        
        if (isLoading) {
            return <Spinner />
          }
        return (
            <div>
                {console.log(this.state.SearchResults)}
                <p>fsdgdfgdg</p>
            </div>
        )
    }
}

export default SearchResults