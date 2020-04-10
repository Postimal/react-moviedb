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


//   componentDidMount() {
//     this.setState({isLoading: true})
//     Promise.all([
//                 fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${this.props.apiOpener}&language=en-US&page=1`),
//                 fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this.props.apiOpener}&language=en-US&page=1`),
//                 fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.props.apiOpener}&language=en-US&page=1`),
//                 fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.props.apiOpener}&language=en-US&page=1`),
//                 fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.props.apiOpener}`),
//                 fetch(`https://api.themoviedb.org/3/configuration?api_key=${this.props.apiOpener}`)
//                 ])

//               .then(([res1, res2, res3, res4, res5, res6]) => {
//                 return Promise.all([res1.json(),res2.json(),res3.json(),res4.json(),res5.json(),res6.json()])
//               })
//               .then(([res1,res2,res3,res4,res5,res6]) => {
//                 this.setState({
//                   moviesUpcoming: res1,
//                   popular: res2,
//                   now_playing: res3,
//                   top_rated: res4,
//                   movieGenres: res5,
//                   MDBConfig: res6,
//                 })
//               })
//               .catch((error) => {
//                 console.log(error);
//               });

// }



// own fetch function with 2 parameters, not siure if its ok but propably faster version
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
      }, 700);
    }
}


  render() {
    const { isLoading } = this.state;

    // Initiates carousels
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
        />
        {movie}
        <Footer />
        <ScrollToTopButton />
      </React.Fragment>
    );
  }
}

export default Home;
