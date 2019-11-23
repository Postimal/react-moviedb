import React, { Component } from "react";
import { Link } from "react-router-dom";
import Swiper from "swiper";

import "./HomeHeader.scss";

class HomeHeader extends Component {
  handleGetGenre = genreId => {
    let mainGenre;
    if (this.props.movieGenres.genres) {
      this.props.movieGenres.genres.forEach(genre => {
        if (genre.id === genreId[0]) {
          mainGenre = genre.name;
        }
      });
    }

    return mainGenre;
  };
  render() {
    const config = this.props.MDBConfig;
    const items = this.props.items;
    if (items) console.log(items.map(item => item.title));

    // Initiates carousels
    (() => {
      const sliderEl = document.querySelector(".home-swiper-container");
      if (!sliderEl) {
        return;
      }
      const slider = new Swiper(sliderEl, {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        observer: false,

        autoplay: {
          delay: 5000
        },

        pagination: {
          el: ".home-swiper-pagination",
          type: "progressbar"
        },
        navigation: {
          nextEl: ".home-swiper-button-next",
          prevEl: ".home-swiper-button-prev"
        }
      });
    })();
    // za kazdym razem musze warunkowac czy mam co renderowac
    if (!items) {
      return <h1>propsy ida w doł</h1>;
    }

    return (
      <div style={{ position: "relative" }}>
        <div className="home-swiper-container">
          {/* carousel item */}
          <div className="swiper-wrapper">
            {this.props.items.map((item, i) => {
              if (i > 1 && i < 7) {
                return (
                  <Link
                    key={item.id}
                    to={`/details/movie/${item.id}`}
                    className="swiper-slide"
                    style={{
                      background: `linear-gradient(
                                                    rgba(0, 0, 0, 0.6),
                                                    rgba(0, 0, 0, 0.6)
                                                    ) center center no-repeat, #fff url(${
                                                      config.images
                                                        ? config.images
                                                            .secure_base_url
                                                        : ""
                                                    }${
                        config.images ? config.images.backdrop_sizes[2] : ""
                      }${item.backdrop_path}) center top no-repeat`,
                      backgroundSize: "cover,cover"
                    }}
                  >
                    <div className="swiper-slide__category">
                      {"Latest".toUpperCase()}
                      <h2 className="swiper-slide__title">{item.title}</h2>
                      <p className="swiper-slide__item-duration">
                        {this.props.movieGenres
                          ? this.handleGetGenre(item.genre_ids)
                          : null}{" "}
                        | {item.vote_average} Rating
                      </p>
                    </div>
                  </Link>
                );
              }
            })}
          </div>
          <div className="home-swiper-pagination"></div>
        </div>
      </div>
    );
  }
}

export default HomeHeader;
