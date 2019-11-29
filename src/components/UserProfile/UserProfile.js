import React, { Component } from 'react'
import './UserProfile.scss'

 class UserProfile extends Component {
    state = {
        ratedMovies: [],
        ratedTV:[],
        ratedTVEpisodes: []
    }

    // zapytanie do userGuest session
    componentDidMount() {
        this.setState({isLoading: true})
        Promise.all([
                    fetch(`https://api.themoviedb.org/3/guest_session/${this.props.sessionID}/rated/movies?api_key=12a5356516535d4d67654a936a088c1b&language=en-US&sort_by=created_at.asc`),
                    fetch(`https://api.themoviedb.org/3/guest_session/${this.props.sessionID}/rated/tv?api_key=12a5356516535d4d67654a936a088c1b&language=en-US&sort_by=created_at.asc`),
                    fetch(`https://api.themoviedb.org/3/guest_session/${this.props.sessionID}/rated/tv?api_key=12a5356516535d4d67654a936a088c1b&language=en-US&sort_by=created_at.asc`)
                    ])
  
                  .then(([res1, res2, res3]) => {
                    return Promise.all([res1.json(),res2.json(),res3.json()])
                  })
                  .then(([res1,res2,res3]) => {
                    this.setState({
                      ratedMovies: res1,
                      ratedTV: res2,
                      ratedTVEpisodes: res3,
                      isLoading:false
                    })
                  })
                  .catch((error) => {
                    console.log(error);
                  });
    }


    render() {

        if (!this.state.ratedTVEpisodes) {
            
            return <h1>propsy ida w doł</h1>;
          }
        return (
             this.state.ratedMovies.results === undefined ? (<div> ładowanko </div>) : (<div> puste tabele </div>)
        
        )
    }
}

export default UserProfile
