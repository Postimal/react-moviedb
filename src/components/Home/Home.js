import React, { Component } from "react";
import Swiper from "swiper";
import HomeHeader from "../HomeHeader/HomeHeader";
import ItemCarousel from "../ItemCarousel/ItemCarousel";
import Spinner from "../Spinner/Spinner";

class Home extends Component {
  state = {
    moviesUpcoming: [],
    popular: [],
    now_playing: [],
    top_rated: [],
    movieGenres: [],
    MDBConfig: [],
    isLoading: false
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=12a5356516535d4d67654a936a088c1b&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(moviesUpcoming => this.setState({ moviesUpcoming }))
      .catch(err => console.log(err));

    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=12a5356516535d4d67654a936a088c1b&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(popular => this.setState({ popular }))
      .catch(err => console.log(err));

    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=12a5356516535d4d67654a936a088c1b&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(now_playing => this.setState({ now_playing }))
      .catch(err => console.log(err));

    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=12a5356516535d4d67654a936a088c1b&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(top_rated => this.setState({ top_rated }))
      .catch(err => console.log(err));

    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=12a5356516535d4d67654a936a088c1b`
    )
      .then(res => res.json())
      .then(movieGenres => this.setState({ movieGenres }))
      .catch(err => console.log(err));

    fetch(
      `https://api.themoviedb.org/3/configuration?api_key=12a5356516535d4d67654a936a088c1b`
    )
      .then(res => res.json())
      .then(MDBConfig => this.setState({ MDBConfig, isLoading: false }))
      .catch(err => console.log(err));
  }

  render() {
    const { isLoading } = this.state;

    // Initiates carousels
    (() => {
      const sliderEl = document.querySelectorAll(".swiper-container");
      if (!sliderEl) {
        return;
      }
      const slider = new Swiper(sliderEl, {
        init: true,
        slidesPerView: 7,
        loop: true,
        spaceBetween: 10,
        observer: true,

        breakpoints: {
          1145: {
            slidesPerView: 7
          },
          768: {
            slidesPerView: 5
          },
          468: {
            slidesPerView: 3
          },
          300: {
            slidesPerView: 2
          }
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });
    })();

    let movie = (
      <div>
        <ItemCarousel
          title="Upcoming"
          genres={this.state.movieGenres.genres}
          MDBConfig={this.state.MDBConfig}
          items={this.state.moviesUpcoming.results}
        />
        <ItemCarousel
          title="Now Playing"
          genres={this.state.movieGenres.genres}
          MDBConfig={this.state.MDBConfig}
          items={this.state.now_playing.results}
        />
        <ItemCarousel
          title="Top Rated"
          genres={this.state.movieGenres.genres}
          MDBConfig={this.state.MDBConfig}
          items={this.state.top_rated.results}
        />
      </div>
    );

    if (isLoading) {
      return <Spinner />;
    }
    return (
      <React.Fragment>
        <HomeHeader
          MDBConfig={this.state.MDBConfig}
          movieGenres={this.state.movieGenres.genres}
          items={this.state.now_playing.results}
        />
        {movie}
      </React.Fragment>
    );
  }
}

export default Home;
