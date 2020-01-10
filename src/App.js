import React, { Component } from "react";import './App.scss';
import {BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import SearchResults from './components/SearchResults/SearchResults';
import Navigation from './components/Navigation/Navigation';
import MovieDetails from './components/MovieDetails/MovieDetails';
import UserLogIn from './components/UserLogIn/UserLogIn';
import UserProfile from './components/UserProfile/UserProfile';
import Discover from './components/Discover/Discover';
import NoMatch from './components/NoMatch/NoMatch';



class App extends Component {
  state = {
    apiOpener: 'f832443dc432c07133c9696b7323dfa9',
    logInStatus: "",
    guest_session_id: '',
    request_token: '',
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevState.request_token!== this.state.request_token && !this.state.request_token)
      return this.setState({logInStatus: true})
    else if (prevState.guest_session_id !== this.state.guest_session_id && !this.state.quest_session_id)
     return this.setState({logInStatus: "GUEST"})
  }

  getToken = token => {
    this.setState({ 
      request_token: token
    })
  }

  getGuestSessionID = session_id => {
    this.setState({ 
      guest_session_id: session_id,
      })
  }


  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path='/react-moviedb' render={(props) => <Home {...props} apiOpener={this.state.apiOpener} />}/>
          <Route path='/search/:id' render={(props) => <SearchResults {...props} searchParam={this.state.searchParam} />}/>
          <Route path='/discover' render={(props) => <Discover {...props} apiOpener={this.state.apiOpener} />}/>
          <Route path='/details/movie/:id'  render={(props) => <MovieDetails {...props} apiOpener={this.state.apiOpener} />}/>
          <Route path="/log-in" render={(props) => <UserLogIn {...props} apiOpener={this.state.apiOpener} getToken={this.getToken} getGuestSessionID={this.getGuestSessionID}/>} />
          <Route path="/profile/:status" render={(props) => <UserProfile {...props} apiOpener={this.state.apiOpener} sessionID={this.state.guest_session_id} />}/>

          {!this.state.logInStatus  ? <Redirect from='/profile' to="/log-in" /> : <Redirect from='/profile' to='/profile/approved' /> }
          {!this.state.logInStatus  ? <Redirect from='/profile/approved' to="/log-in" /> : <Redirect from='/log-in' to='/profile/approved' /> }
          {!this.state.logInStatus === 'GUEST'  ? <Redirect from='/log-in' to='/profile/guest' /> : <Redirect from='/profile/guest' to="/log-in" /> }

          <Route component={NoMatch}/>
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
