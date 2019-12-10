import React, { Component } from 'react';
import Spinner from '../Spinner/Spinner';
import { CircularProgressbar } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import ControlBar from './ControlBar/ControlBar';
import './SearchResults.scss';
import "react-circular-progressbar/dist/styles.css";

 class SearchResults extends Component {
     state = {
         SearchResults: null,
         page:1,
         isLoading: false,
         error: null,
         searchParam: this.props.searchParam
     }

     componentDidMount() {
         this.setState({isLoading: true})
           fetch(`https://api.themoviedb.org/3/search/multi?api_key=12a5356516535d4d67654a936a088c1b&language=en-US&query=${this.props.match.params.id}&page=${this.state.page}&include_adult=false`)
          .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Something went wrong');
            }
          })
          .then(data => this.setState({SearchResults: data, isLoading:false}))
          .catch(error => this.setState({ error, isLoading: false }));
      }


      //zrobiłem funkcje w app.js dałem ja do komponentu navi > searchpanel i potem dałem ten wynik do tego koponentu, ale to chyba bez sensu, chyba ze dam nowy button do fetchowaniw danych
    //  async componentDidUpdate(prevProps, prevState) {
    //     if(`:${prevState.searchParam}` !== this.props.match.params.id) 
    //         this.setState({isLoading: true})
    //       await  fetch(`https://api.themoviedb.org/3/search/multi?api_key=12a5356516535d4d67654a936a088c1b&language=en-US&query=${this.props.match.params.id}&page=${this.state.page}&include_adult=false`)
    //         .then(res => res.json())
    //         .then(data => this.setState({SearchResults: data, isLoading:false}))
    //         console.log(`:${prevState.searchParam}`,this.props.match.params.id)

    //  }

     componentWillUnmount() {

     }

      handleNextPage = () => {
            fetch(`https://api.themoviedb.org/3/search/multi?api_key=12a5356516535d4d67654a936a088c1b&language=en-US&query=${this.props.match.params.id}&page=${this.state.page+1}&include_adult=false`)
            .then(res => res.json())
            .then(data => this.setState({SearchResults: data}))
            this.setState({page: this.state.page +1})
      }

      handlePrevPage = () => {
          fetch(`https://api.themoviedb.org/3/search/multi?api_key=12a5356516535d4d67654a936a088c1b&language=en-US&query=${this.props.match.params.id}&page=${this.state.page-1}&include_adult=false`)
          .then(res => res.json())
          .then(data => this.setState({SearchResults: data}))
          this.setState({page: this.state.page -1})
    }



    render() {
        const { SearchResults } = this.state;
        
        
        if (this.state.error) {
            return <p>{this.state.error.message}</p>;
          }
        if (SearchResults === null) {
            return <Spinner />
          }
        return (
            <React.Fragment>
                <h1>Your Search Results</h1>
                <ControlBar handleNextPage={this.handleNextPage}  handlePrevPage={this.handlePrevPage} page={this.state.page}/>
                <div className="search-result-box">

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
                                        {/* <a href={`https://www.themoviedb.org/movie/${item.id}?language=en-US`}>moviedb</a> */}
                                        <Link to={`/details/movie/${item.id}`}>More</Link>
                                    </button>
                                   
                                </div>
                            </div>
                        </div>  
                    )
                    )}
                </div>
                <ControlBar handleNextPage={this.handleNextPage}  handlePrevPage={this.handlePrevPage} page={this.state.page}/>
            </React.Fragment>
            
        )
    }
}

export default SearchResults