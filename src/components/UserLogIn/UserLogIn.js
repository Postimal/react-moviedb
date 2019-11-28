import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './UserLogIn.scss'
 
class UserLogIn extends Component {
    state ={
        requestToken: '',
        guestSession: ''
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=12a5356516535d4d67654a936a088c1b`)
        .then( res => res.json())
        .then ( data => this.setState({requestToken: data}))

        fetch(`https://api.themoviedb.org/3/authentication/guest_session/new?api_key=12a5356516535d4d67654a936a088c1b`)
        .then( res => res.json())
        .then( data => this.setState({guestSession: data}))
      }


    render() {
        console.log(this.state.requestToken.request_token,this.state.guestSession.guest_session_id);
        console.log(this.props.getToken, this.props.getGuestSessionID)
        
        if (!this.state.requestToken) {
            
            return <h1>propsy ida w doł</h1>;
          }
        return (
        
            <div className="user-log-in">
                <div className="user-log-in-container">
                    <h2>Log In</h2>
                    <a href={`https://www.themoviedb.org/authenticate/${this.state.requestToken.request_token}?redirect_to=http://localhost:3000/profile/approved`}>
                        <button className="user-log-in-container-content__button"
                            onClick={() => this.props.getToken(this.state.requestToken.request_token)}>
                            Log In
                        </button>
                    </a>
                    <Link to="/profile/guest">
                        <button className="user-log-in-container__button" 
                            onClick={() => this.props.getGuestSessionID(this.state.guestSession.guest_session_id)}>
                            Browse as Guest
                        </button>
                    </Link>
                </div>
                <h3>Rate your favourite movies</h3>
            </div>
        )
    }
}

export default UserLogIn