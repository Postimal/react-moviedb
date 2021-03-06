import React, { Component } from "react";
import Swiper from "swiper";

import HomeHeader from "../HomeHeader/HomeHeader";
import ItemCarousel from "../ItemCarousel/ItemCarousel";
import Spinner from "../Spinner/Spinner";
import Footer from './../Footer/Footer';
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";

class Home extends Component {
  state = {
    moviesUpcoming: [],
    popular: [],
    now_playing: [],
    top_rated: [],
    movieGenres: [],
    MDBConfig: [],
    isLoading: false,
  };


componentDidMount() {
  this.setState({isLoading: true});

  const fetchData = async (url,stateName) => {
    try {
        const response = await fetch(url)
        const data = await response.json();
        this.setState({[stateName]:data});
    } catch(error) {
        console.log(error);
    }
  }
  fetchData(`https://api.themoviedb.org/3/movie/upcoming?api_key=${this.props.apiOpener}&language=en-US&page=1`, 'moviesUpcoming');
  fetchData(`https://api.themoviedb.org/3/movie/popular?api_key=${this.props.apiOpener}&language=en-US&page=1`, 'popular');
  fetchData(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.props.apiOpener}&language=en-US&page=1`, 'now_playing');
  fetchData(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.props.apiOpener}&language=en-US&page=1`,'top_rated');
  fetchData(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.props.apiOpener}`, 'movieGenres');
  fetchData(`https://api.themoviedb.org/3/configuration?api_key=${this.props.apiOpener}`,'MDBConfig');

}

componentDidUpdate(prevProps, prevState) {
    if (this.state.isLoading) {
      setTimeout(() => {
        this.setState(() => ({isLoading: false}))
      }, 500);
    }
}

  render() {
    const { isLoading } = this.state;
    (() => {
      const sliderEl = document.querySelectorAll(".swiper-container");
      if (!sliderEl) {
        return;
      }
      // eslint-disable-next-line
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
          apiOpener={this.props.apiOpener}
        />
        {movie}
        <Footer />
        <ScrollToTopButton />
      </React.Fragment>
    );
  }
}

export default Home;
