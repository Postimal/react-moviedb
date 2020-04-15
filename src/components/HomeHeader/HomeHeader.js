import React, { Component } from "react";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import Swiper from "swiper";

import "./HomeHeader.scss";
import Modal from '../Modal/Modal';

class HomeHeader extends Component {
	state ={
		youtubeData:null,
		showModal: false,
		error:null,
	}

	handleGetGenre = genreId => {
		let mainGenre;
		if (this.props.movieGenres) {
			this.props.movieGenres.find(genre => genre.id === genreId[0]? mainGenre = genre.name : null)
		}
		return mainGenre
	}

	getTrailer =  async (movieID) => {
			try {
					const response = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${this.props.apiOpener}`)
					const data = await response.json();
					const indexOfTrailerID = data.results.findIndex(el => el.type === "Trailer");
					this.setState({youtubeData:data.results[indexOfTrailerID].key, showModal: true});
			} catch(error) {
					this.setState({error:error})
			}
	}

	fireTrailer = (movieID,e) => {
		e.stopPropagation();
		this.getTrailer(movieID)
	}

	toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
	};

	componentDidMount() {
			(() => {
				const sliderContainer = document.querySelector(".home-swiper-container");
				if (!sliderContainer) {
					return;
				}
				// eslint-disable-next-line
				const slider = new Swiper(sliderContainer, {
					slidesPerView: 1,
					loop: true,
					spaceBetween: 0,
					preventClicksPropagation: true,
					simulateTouch: false,
					effect: "coverflow",

					autoplay: {
						delay: 6000
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
			}
			)();
	}


	render() {
		const config = this.props.MDBConfig;
		const items = this.props.items;

		if (!items) {
			return <Spinner/>;
		}

		return (
			<div style={{ position: "relative" }}>
				<div className="home-swiper-container">
					<div className="swiper-wrapper">
					{/* eslint-disable-next-line*/}
						{this.props.items.map((item, i) => {
							if (i > 2 && i < 7) {
								return (
									<li
										key={item.id}
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
										<Link
											to={`/details/movie/${item.id}`}
											className="swiper-slide__anchor"
										></Link>
										<div className="swiper-slide__category">
											{"Latest".toUpperCase()}
											<h2 className="swiper-slide__title">{item.title}</h2>
											<p className="swiper-slide__item-duration">
												{this.props.movieGenres
													?
													this.handleGetGenre(item.genre_ids)
													: null}{" "}
												| {item.vote_average} Rating
											</p>
											<p className="swiper-slide__trailer" onClick={(e)=>this.fireTrailer(item.id,e)} >Watch Trailer</p>
												{this.state.error && <p className="swiper-slide__error-message">Can't upload trailer:{this.state.error.message}</p>}
										</div>
									</li>
								);
							}
						})}
					</div>
					<div className="home-swiper-pagination"></div>
				</div>
				{this.state.showModal && <Modal>
																	<button className="closeModal-btn" type="button" title="close" onClick={this.toggleModal}></button>
																	<iframe src={`https://www.youtube.com/embed/${this.state.youtubeData}?showinfo=0&wmode=transparent&autoplay=1&rel=0`} title="trailer video"
																	frameBorder="0" scrolling="no" allowFullScreen="1" allow="autoplay"></iframe>
																 </Modal>}
			</div>
		);
	}
}

export default HomeHeader;
