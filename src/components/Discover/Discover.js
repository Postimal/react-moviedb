import React, { Component } from 'react';
import DiscoverItem from './DiscoverItem/DiscoverItem';
import './Discover.scss'
import Footer from '../Footer/Footer';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton';

class Discover extends Component {
    state = {
        output: null,
        sort_by:'popularity.desc',
        genre: null,
        year: null,

    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=${this.state.sort_by}&api_key=${this.props.apiOpener}&language=en-US&page=1&${this.state.year?`primary_release_year=${this.state.year}`:''}&${this.state.genre?`with_genres=${this.state.genre}`:''}`)
        .then(res => res.json())
        .then(data => {
            const filteredOutLowRateMovies = data.results.filter(item => item.popularity > 10);
            this.setState({output: filteredOutLowRateMovies})
        })
        .catch((error) => {
            console.log(error);
          });
    }
  

    onChangeHandler = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
    
    
    render(){
        return (
            <React.Fragment>
                 <div className='discover-container'>
                    <h2>Discover Section</h2>
                    <div className='discover-container-header'>
                        <button onClick={this.fetchData}>SEARCH</button>
                        {/* przedladowuje sie state za kazdym razem, a za kliknieciem search fetchuje dane pobierajac parametry ze state */}
                        <form method="GET" action='/'>
                            <div className='discover-container-header__filters'>
                                    <input type="number" name="year" placeholder="year" onChange={this.onChangeHandler}/>
                                    <select onChange={this.onChangeHandler} name="genre">
                                        <option value=''>pick genre</option>
                                        <option value="28">Action</option>
                                        <option value="12">Adventure</option>
                                        <option value="18">Animation</option>
                                        <option value="80">Crime</option>
                                        <option value="35">Comedy</option>
                                        <option value="14">Fantasy</option>
                                        <option value="27">Horror</option>
                                        <option value="0">Science Fiction</option>
                                    </select>
                                    <select onChange={this.onChangeHandler} name="sort_by">
                                        <option value=''>sort by</option>
                                        <option value="popularity.desc">Popularity descending</option>
                                        <option value="vote_average.asc">Vote average asscending</option>
                                        <option value="vote_average.desc">Vote average descending</option>
                                        <option value="revenue.desc">Highest grossing</option>
                                    </select>
                            </div>
                        </form>
                    </div>
                    <div className='discover-container-body'>
                        <DiscoverItem props={this.state.output}/>    
                    </div>
                </div>
                <Footer />
                <ScrollToTopButton />
            </React.Fragment>
           
        );
    }


   
}

export default Discover
