import React from 'react';
import './App.scss';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import SearchResults from './components/SearchResults/SearchResults';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/:id' component={SearchResults}/>
      </Switch>
    </BrowserRouter>
     
    
    
  );
}

export default App;
