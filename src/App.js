import React, { Component } from "react";
import {BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './components/Home/Home';
import SearchResults from './components/SearchResults/SearchResults';
import Navigation from './components/Navigation/Navigation';
import MovieDetails from './components/MovieDetails/MovieDetails';
import UserLogIn from './components/UserLogIn/UserLogIn';
import UserProfile from './components/UserProfile/UserProfile';
import Discover from './components/Discover/Discover';
import NoMatch from './components/NoMatch/NoMatch';
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import './App.scss';


const client_id = process.env.REACT_APP_API_KEY;

class App extends Component {
  state = {
    apiOpener:client_id,
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

  setToken = token => {
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
        <ScrollToTop>
          <Navigation logStatus={this.state.logInStatus} />
          <Switch>
            <Route exact path='/react-moviedb' render={(props) => <Home {...props} apiOpener={this.state.apiOpener}  />}/>
            <Route path='/search/:id' render={(props) => <SearchResults {...props} searchParam={this.state.searchParam} />}/>
            <Route path='/discover' render={(props) => <Discover {...props} apiOpener={this.state.apiOpener} />}/>
            <Route path='/details/movie/:id'  render={(props) => <MovieDetails {...props} apiOpener={this.state.apiOpener} logStatus={this.state.logInStatus} sessionId={this.state.guest_session_id} />}/>
            <Route path="/log-in" render={(props) => <UserLogIn {...props} apiOpener={this.state.apiOpener} setToken={this.setToken} getGuestSessionID={this.getGuestSessionID}/>} />
            <Route path="/profile/:status" render={(props) => <UserProfile {...props} apiOpener={this.state.apiOpener} sessionID={this.state.guest_session_id} />}/>

            {!this.state.logInStatus  ? <Redirect from='/profile' to="/log-in" /> : <Redirect from='/profile' to='/profile/approved' /> }
            {!this.state.logInStatus  ? <Redirect from='/profile/approved' to="/log-in" /> : <Redirect from='/log-in' to='/profile/approved' /> }
            {!this.state.logInStatus === 'GUEST'  ? <Redirect from='/log-in' to='/profile/guest' /> : <Redirect from='/profile/guest' to="/log-in" /> }
            <Route component={NoMatch}/>
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
