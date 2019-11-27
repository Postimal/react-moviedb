import React, { Component } from "react";import './App.scss';
import {BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import SearchResults from './components/SearchResults/SearchResults';
import Navigation from './components/Navigation/Navigation';
import MovieDetails from './components/MovieDetails/MovieDetails';
import UserLogIn from './components/UserLogIn/UserLogIn';
import UserProfile from './components/UserProfile/UserProfile';


class App extends Component {
  state = {
    logInStatus: '',
    guest_session_id: '',
    request_token: ''
  }

  getTokenAndID = (session_id, token) => {
    this.setState({ guest_session_id: session_id, request_token: token})
  }


  render() {
    return (
      <BrowserRouter>
        <Navigation/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/search/:id' exact component={SearchResults}/>
          <Route path='/details/movie/:id' exact component={MovieDetails}/>
          <Route path="/log-in" render={(props) => <UserLogIn {...props} getTokenAndID={this.getTokenAndID}/>} />
          <Route path="/profile/:status" exact component={UserProfile} />

          {!this.props.logInStatus || this.props.session.failure  ? <Redirect from='/profile' to="/log-in" /> : <Redirect from='/profile' to='/profile/approved' /> }
          {!this.props.logInStatus || this.props.session.failure  ? <Redirect from='/profile/approved' to="/log-in" /> : <Redirect from='/log-in' to='/profile/approved' /> }
          {!this.props.logInStatus === 'GUEST'  ? <Redirect from='/log-in' to='/profile/guest' /> : <Redirect from='/profile/guest' to="/log-in" /> }
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
