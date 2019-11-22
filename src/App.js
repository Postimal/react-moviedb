import React from 'react';
import './App.scss';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import SearchResults from './components/SearchResults/SearchResults';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Switch>
        <Route path='/home' exact component={Home}/>
        <Route path='/search/:id' exact component={SearchResults}/>
      </Switch>
    </BrowserRouter>
     
    
    
  );
}

export default App;
