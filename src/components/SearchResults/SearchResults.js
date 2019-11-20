import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import { CircularProgressbar } from "react-circular-progressbar";
import './SearchResults.scss';
import "react-circular-progressbar/dist/styles.css";

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
        const { SearchResults } = this.state;
        
        
        if (SearchResults === null) {
            return <Spinner />
          }
        return (
            <div>
                
                {console.log(SearchResults.results)}
                {SearchResults.results.map(item => (
                    <div key={item.id} className="movie-container">
                        <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${item.poster_path}`} alt="movie poster"/>
                        <div className="movie-container-info">
                            <a href={`https://www.themoviedb.org/movie/${item.id}?language=en-US`}>{item.original_title}</a>
                            <div style={{maxHeight:'100px', maxWidth:'100px'}}><CircularProgressbar value={`${item.vote_average}`*10} text={`${item.vote_average}`* 10 + '%'}/>User Score</div>
                        </div>
                        

                    </div>
                    
                )
                )}
                
                <p>fsdgdfgdg</p>
            </div>
        )
    }
}

export default SearchResults