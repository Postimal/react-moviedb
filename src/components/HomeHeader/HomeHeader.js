import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';

import './HomeHeader.scss';



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
  }
    render() {
        const config = this.props.MDBConfig;
        console.log(this.props.items);

        // Initiates carousels
    //     (() => {
    //         const sliderEl = document.querySelector('.home-swiper-container');
    //         if(!sliderEl){
    //         return;
    //         }
    //         const slider = new Swiper(sliderEl, {
    //         slidesPerView: 1,
    //         loop: true,
    //         spaceBetween: 0,
    //         observer: true,
    
    //         autoplay: {
    //             delay: 10000,
    //         },
    
    //         pagination: {
    //             el: '.home-swiper-pagination',
    //             type: 'progressbar',
    //         },
    //         navigation: {
    //             nextEl: '.home-swiper-button-next',
    //             prevEl: '.home-swiper-button-prev',
    //         }
    //      });
    //   })();


        return (
            <div className="home-swiper-container">
                          {/* carousel item
                <div className="swiper-wrapper">
                    {this.props.items.map((item,i) => {
                        if(i >3 && i < 7) {
                            return (
                                <Link key={item.id} to={`/details/movie/${item.id}`} className="swiper-slide" style={{background: `linear-gradient(
                                    rgba(0, 0, 0, 0.6),
                                    rgba(0, 0, 0, 0.6)
                                    ) center center no-repeat, #fff url(${config.images ? config.images.secure_base_url : ''}${config.images ? config.images.backdrop_size[2] : ''}${item.backdrop_path}) center top no-repeat`, backgroundSize: 'cover,cover'}}>
                                    <div className="swiper-slide__category">{'Latest'.toUpperCase()}</div>
                                    <h2 className="swiper-slide__title">{this.props.item.title}</h2>
                                    <div className="swiper-slide__category">{this.handleGetGenre(item.genre_ids)} | {item.vote_average} Rating</div>

                                </Link>
                            )
                        }
                    })}
                </div> */}
                <div className="home-swiper-pagination"></div>
            </div>
        )
    }
}

export default HomeHeader
