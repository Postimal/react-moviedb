import React from 'react';
import './App.scss';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import SearchResults from './components/SearchResults/SearchResults';
import Navigation from './components/Navigation/Navigation';
import MovieDetails from './components/MovieDetails/MovieDetails';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Switch>
        <Route path='/home' exact component={Home}/>
        <Route path='/search/:id' exact component={SearchResults}/>
        <Route path='/details/movie/:id' exact component={MovieDetails}/>
      </Switch>
    </BrowserRouter>
     
    
    
  );
}

export default App;
