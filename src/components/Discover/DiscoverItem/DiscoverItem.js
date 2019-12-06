import React from 'react';
import { Link } from 'react-router-dom';
import Star from './star.png';
import './DiscoverItem.scss'

 const DiscoverItem = movies => {


    if (!movies.props) {
        return <h4>Loading</h4>;
        }
    if (movies.props.length === 0) {
            return <h2>Nothing to display due to filtering trash movies under 10k of votes</h2>;
        }
    return (
        <React.Fragment>
             {movies.props.map(item => (
            <Link key={item.id} to={`/details/movie/${item.id}`}>
                <div className="discover-item">
                    <img className="discover-item__image"
                      src={item.backdrop_path? `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${item.backdrop_path}`: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/oJb0ubHTWd3fMPYBblu9WQr8io1.jpg'} alt="movie"/>
                    <h5 className="discover-item__title">{item.name ? item.name : item.title}</h5>
                    <p className="discover-item__rating">
                      <img style={{height:'20px', transform:'translate(-2px,2px)'}} src={Star} alt="star"/>
                      {item.vote_average}
                    </p>
                </div>
            </Link>))}
        </React.Fragment>
         
    )
}

export default DiscoverItem
