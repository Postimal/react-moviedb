import React, { Component } from 'react'
import './UserProfile.scss'

 class UserProfile extends Component {
    state = {
        ratedMovies: [],
        ratedTV:[],
        ratedTVEpisodes: []

    }

    // zapytanie do userGuest session
    componentDidMount () {
        fetch(`https://api.themoviedb.org/3/guest_session/${this.props.sessionID}/rated/movies?api_key=12a5356516535d4d67654a936a088c1b&language=en-US&sort_by=created_at.asc`)
        .then( res => res.json())
        .then( data => this.setState({ratedMovies: data}))

        fetch(`https://api.themoviedb.org/3/guest_session/${this.props.sessionID}/rated/tv?api_key=12a5356516535d4d67654a936a088c1b&language=en-US&sort_by=created_at.asc`)
        .then( res => res.json())
        .then( data => this.setState({ratedTV: data}))

        
        fetch(`https://api.themoviedb.org/3/guest_session/${this.props.sessionID}/rated/tv?api_key=12a5356516535d4d67654a936a088c1b&language=en-US&sort_by=created_at.asc`)
        .then( res => res.json())
        .then( data => this.setState({ratedTVEpisodes: data}))
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
