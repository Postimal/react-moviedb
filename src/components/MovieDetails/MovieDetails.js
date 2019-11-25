import React, { Component } from 'react';
import './MovieDetails.scss';

 class MovieDetails extends Component {
    state = {
        movieData: null,
        isLoading: false,
    }


    componentDidMount() {
        this.setState({isLoading: true})
       fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=12a5356516535d4d67654a936a088c1b&language=en-US`)
       .then(res => res.json())
       .then(data => this.setState({movieData: data, isLoading:false}))
     }

    render() {

        const movie = this.state.movieData;

        if (!movie) {
            return <h1>propsy ida w doł</h1>;
          }
        return (
            <React.Fragment>
              <div className="swiper-slide"
                style={{
                        background: `linear-gradient(
                                                     rgba(0, 0, 0, 0.6),
                                                    rgba(0, 0, 0, 0.6)
                                                    ) center center no-repeat, #fff 
                                                    url('https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}') center top no-repeat`,
                            backgroundSize: "cover,cover"
                     }}
              >
                <div className="swiper-slide__category">
                    {"Latest".toUpperCase()}
                    <h2 className="swiper-slide__title">{movie.title}</h2>
                    {/* <p className="swiper-slide__item-duration">
                      {this.props.movieGenres
                      ? this.handleGetGenre(item.genre_ids)
                      : null}{" "}
                    | {item.vote_average} Rating
                    </p> */}
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default MovieDetails
