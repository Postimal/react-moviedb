import React, { Component } from 'react';
import Spinner from './../Spinner/Spinner';
import { Link } from "react-router-dom";
import './UserProfile.scss'

 class UserProfile extends Component {
    state = {
        ratedMovies: null,
        ratedTV: null,
    }

    // zapytanie do userGuest session
    componentDidMount() {
        this.setState({isLoading: true})
        Promise.all([
                    fetch(`https://api.themoviedb.org/3/guest_session/${this.props.sessionID}/rated/movies?api_key=${this.props.apiOpener}&language=en-US&sort_by=created_at.asc`),
                    fetch(`https://api.themoviedb.org/3/guest_session/${this.props.sessionID}/rated/tv?api_key=${this.props.apiOpener}&language=en-US&sort_by=created_at.asc`),
                    ])

                  .then(([res1, res2, res3]) => {
                    return Promise.all([res1.json(),res2.json()])
                  })
                  .then(([res1,res2,res3]) => {
                    this.setState({
                      ratedMovies: res1,
                      ratedTV: res2,
                      isLoading:false
                    })
                  })
                  .catch((error) => {
                    console.log(error);
                  });
    }


    render() {

        if (this.state.ratedTV === null || this.state.ratedMovies === null ) {
            return <Spinner />;
          }
        return (
            <>
            {this.props.sessionID &&
             <>
              <Link className="go-homepage-button" to={'/react-moviedb'}>Back To Home Page</Link>
              <p className="guest-information-message">Now You have access to vote system, please vote smartly <span role="img" aria-label="raising hands">🙌</span> </p>
            </>
             }
             <div className='user-rated-item-container'>
               <div className='user-rated-item-container__movies'>
                 {this.state.ratedMovies.results.length === 0 ?
                    (<h3>no movies found</h3>)
                    :
                    (this.state.ratedMovies.results.map(item => (
                        <Link key={item.id} to={`/details/movie/${item.id}`} className="movie-item">
                          <img
                            className="movie-item__image"
                            src={`https://image.tmdb.org/t/p/w154/${item.poster_path}`}
                            alt={item.title}
                          />
                          <p className="movie-item__your-rate">Your rate is <br></br><span className="movie-item__your-rate--value">{item.rating}</span></p>
                          <h3 className="movie-item__title">{item.title}</h3>
                          <p className="movie-item-rating">
                            Avr Rate:
                            {item.vote_average}
                          </p>
                        </Link>
                    )
                 )
                 )}
               </div>
               <div className='user-rated-item-container__tv'>
                  {this.state.ratedTV.results.length === 0 ?
                    (<h3>no ratedTV found</h3>)
                    :
                    (this.state.ratedTV.results.map(item => (
                      <div key={item.id} className="rated-movie">
                        {item.title | item.vote_average}
                      </div>
                    )
                  )
                  )}
               </div>
             </div>
            </>
        )
    }
}

export default UserProfile
