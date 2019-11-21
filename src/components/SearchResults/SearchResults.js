import React, { Component } from 'react';
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

      handleClick = () => {
          this.setState({page: this.state.page +1})
            fetch(`https://api.themoviedb.org/3/search/multi?api_key=12a5356516535d4d67654a936a088c1b&language=en-US&query=${this.props.match.params.id}&page=${this.state.page}&include_adult=false`)
            .then(res => res.json())
            .then(data => this.setState({SearchResults: data}))

      }

    render() {
        const { SearchResults } = this.state;
        
        
        if (SearchResults === null) {
            return <Spinner />
          }
        return (
            <React.Fragment>
                <h1>Your Search Results</h1>
                <h6> page: {this.state.page}</h6>
                <button className="show-more" onClick={this.handleClick}>
                    Show more
                </button>
                <div className="search-result-box">
                
                    {console.log(SearchResults)}
                    {SearchResults.results.map(item => (
                        <div key={item.id} className="movie-container">
                            <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${item.poster_path? item.poster_path: 'oJb0ubHTWd3fMPYBblu9WQr8io1.jpg'}`} alt="movie poster"/>
                            <div className="movie-container-info">
                                <h4>{item.original_title? 
                                    item.original_title
                                    :
                                    item.original_name}
                                </h4>
                                <div className="info-inner">
                                     {item.release_date ?
                                     (<p className="info-inner-date">{item.release_date.substring(0,4)}</p>)
                                      : 
                                     (<p className="info-inner-date">2000</p>)}
                                     User Score<div className="info-inner-voting"><CircularProgressbar  value={`${item.vote_average}`*10} text={`${item.vote_average}`* 10 + '%'}/></div>
                                    <button>
                                        <a href={`https://www.themoviedb.org/movie/${item.id}?language=en-US`}>moviedb</a>
                                    </button>
                                </div>
                            </div>
                        </div>  
                    )
                    )}
                </div>
            </React.Fragment>
            
        )
    }
}

export default SearchResults