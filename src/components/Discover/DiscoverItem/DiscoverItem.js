import React from 'react';
import { Link } from 'react-router-dom'

 const DiscoverItem = movies => {


    if (!movies.props) {
        return <h1>Loading</h1>;
        }
    return (
        <React.Fragment>
             {movies.props.map(item => (
            <Link key={item.id} to={`/details/movie/${item.id}`}>
                <div className="discover-item">
                    <img style={{height:'200px'}} src={item.backdrop_path? `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${item.backdrop_path}`: null} alt="movie"/>
                    <h5 className="discover-item__title">{item.name ? item.name : item.title}</h5>
                    <p className="discover-item-rating">
                    {item.vote_average}
                    </p>
                </div>
            </Link>))}
            <div>wow
            {console.log(movies.props)}
            </div>
        </React.Fragment>
         
    )
}

export default DiscoverItem
