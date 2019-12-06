import React, { Component } from 'react';
import Spinner from './../Spinner/Spinner';
import CommentSection from './CommentSection/CommentSection';
import MovieCast from './MovieCast/MovieCast';
import './MovieDetails.scss';

 class MovieDetails extends Component {
    state = {
        movieData: null,
        creditsData: null,
        videos: null,
        isLoading: false,
        // przykładowo pobieramy komentarze z bazy danych i wrzucamy je do state 
        comments: [
          {name: "John Connor", comment: "Very cool, action till the end!!!", id: 'Nov 26 2019 11:49:50'},
          {name: "anonim", comment: "For me, strong 7/10. Good for lazy sunday", id:'Nov 24 2019 10:19:00'},
          {name: "Kiepson", comment: "Świetne kino, szczerze polecam", id: 'Nov 24 2019 09:49:30'},
          {name: "Jamnik", comment: "Obsada świetna, film natomiast przeciętny ale można oglądnąć ;) ", id:'Nov 22 2019 05:39:00'},
          // {name: "Mietek", comment: "Bardzo słabo zamiast się śmiać po prostu zasnąłem...", id: 'Nov 24 2019 11:49:50'},
          // {name: "anonim", comment: "A mi się film podoba, dziwny humor trochę abstrakcyjny", id:'Nov 24 2019 10:19:00'}
        ]
       
    }

    componentDidMount() {
      this.setState({isLoading: true})
      Promise.all([
                  fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${this.props.apiOpener}&language=en-US`),
                  fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/credits?api_key=${this.props.apiOpener}&language=en-US`),
                  fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/videos?api_key=${this.props.apiOpener}&language=en-US`)
                  ])
                  
                .then(([res1, res2, res3]) => {
                  return Promise.all([res1.json(),res2.json(),res3.json()])
                })
                .then(([res1,res2,res3]) => {
                  this.setState({
                    movieData: res1,
                    creditsData: res2,
                    videos: res3,
                    isLoading:false
                  })
                })
                .catch((error) => {
                  console.log(error);
                });
  }


    //  funkcja dodajca komentarz, do przekazania w propsach do comment section
    addComment = comment => {
      let commentList = this.state.comments;
      comment.id = String(new Date()).split(' ').splice(1,4).join(' ')
      this.setState({
        comments: [ comment ,...commentList]
      })
    }

    render() {

        const movie = this.state.movieData;
        const credits = this.state.creditsData;
        const videos = this.state.videos;

        if (!movie || !credits || !videos) {
          return <Spinner />;
          }
        return (
            <React.Fragment>
              <div className="movie-box"
                style={{
                        background: `linear-gradient(
                                                     rgba(0, 0, 0, 0.6),
                                                    rgba(0, 0, 0, 0.6)
                                                    ) center center no-repeat, #fff 
                                                    url('https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}') center top no-repeat`,
                            backgroundSize: "cover,cover"
                     }}
              >
                <div className="movie-box-info">
                    {"Movie Details".toUpperCase()}
                    <h2 className="movie-box-info__title">{movie.title} | {movie.release_date.substring(0,4)}</h2>
                    <p className="movie-box-info__genre">
                      {movie.genres.length >= 2
                      ? 
                      (`${movie.genres[0].name} / ${movie.genres[1].name}`)
                      : (movie.genres[0].name)
                      } 
                      {" "}
                    | {movie.vote_average} Rating
                    </p>
                    <p className="movie-box-info__runtime">{movie.runtime} min</p>
                    <p className="movie-box-info__production">{movie.production_companies[0]? movie.production_companies[0].name : null}</p>
                </div>
              </div>
              <div className="movie-description">
                <h4>Overview</h4>
                {movie.overview}
              </div>
              <div className="movie-cast">
                <MovieCast cast={this.state.creditsData.cast}/>
              </div>
              <CommentSection  
                comments={this.state.comments}
                addComment={this.addComment}
              />
            </React.Fragment>
        )
    }
}

export default MovieDetails
