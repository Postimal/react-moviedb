import React, { Component } from 'react';
import Spinner from './../Spinner/Spinner';
import './UserProfile.scss'

 class UserProfile extends Component {
    state = {
        ratedMovies: null,
        ratedTV: null,
        ratedTVEpisodes: null
    }

    // zapytanie do userGuest session
    componentDidMount() {
        this.setState({isLoading: true})
        Promise.all([
                    fetch(`https://api.themoviedb.org/3/guest_session/${this.props.sessionID}/rated/movies?api_key=${this.props.apiOpener}&language=en-US&sort_by=created_at.asc`),
                    fetch(`https://api.themoviedb.org/3/guest_session/${this.props.sessionID}/rated/tv?api_key=${this.props.apiOpener}&language=en-US&sort_by=created_at.asc`),
                    fetch(`https://api.themoviedb.org/3/guest_session/${this.props.sessionID}/rated/tv?api_key=${this.props.apiOpener}&language=en-US&sort_by=created_at.asc`)
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

        if (this.state.ratedTVEpisodes === null || this.state.ratedTV === null || this.state.ratedMovies === null ) {
            return <Spinner />;
          }
        return (
             <div className='user-rated-item-container'>
               <div className='user-rated-item-container__movies'>
                 {this.state.ratedMovies.results.length === 0 ? 
                    (<h1>no movies found</h1>)
                    :
                    (this.state.ratedMovies.results.map(item => (
                    <div key={item.id} className="rated-movie">
                      {item.title | item.vote_average}
                    </div>
                    )
                 )
                 )}
               </div>
               <div className='user-rated-item-container__tv'>
                  {this.state.ratedTV.results.length === 0 ? 
                    (<h1>no ratedTV found</h1>)
                    :
                    (this.state.ratedTV.results.map(item => (
                      <div key={item.id} className="rated-movie">
                        {item.title | item.vote_average}
                      </div>
                    )
                  )
                  )}
               </div>
               <div className='user-rated-item-container__tvepisodes'>
                  {this.state.ratedTVEpisodes.results.length === 0 ? 
                      (<h1>no ratedTVEpisodes found</h1>)
                      :
                      (this.state.ratedTVEpisodes.results.map(item => (
                      <div key={item.id} className="rated-movie">
                        {item.title | item.vote_average}
                      </div>)
                    )
                    )}
               </div>
             </div>
        
        )
    }
}

export default UserProfile
