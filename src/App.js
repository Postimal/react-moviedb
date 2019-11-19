import React from 'react';
import './App.scss';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import SearchResults from './components/SearchResults/SearchResults';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Home}/>
      <Route path='/searchResults/:id' exact component={SearchResults}/>
    </BrowserRouter>
     
    
    
  );
}

export default App;
