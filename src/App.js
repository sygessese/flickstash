import React, { Component } from 'react';
import Search from './Search.js';
import Header from './Header.js';
import Movies from './Movies.js';


const App = () => {
  return (
    <div className="jumbotron">
      <Header />
      <Search />
      <Movies />
    </div>
  )
}

export default App;
