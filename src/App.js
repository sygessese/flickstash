import React, { Component } from 'react';
import Search from './Search.js';
import Header from './Header.js';
import Movies from './Movies.js';
import AddMovie from './AddMovie.js';
import Watched from './Watched.js';
import ToWatch from './ToWatch.js';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ],
      searchFilter: ''
    }
    this.updateSearchFilter = this.updateSearchFilter.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  updateSearchFilter(query) {
    this.setState({
      searchFilter: query
    }, ()=>{console.log(this.state)})
  }

  addMovie (newMovie) {
    this.setState({
      movies: [...this.state.movies, newMovie]
    }, ()=>{console.log(this.state)} )
  }

  render() {
    return (
      <div className="jumbotron">
        <Header />
        <AddMovie addMovie={this.addMovie} />
        <div className="big-container container">
          <div className="row">
            <Watched />
            <ToWatch />
            <Search updateSearchFilter={this.updateSearchFilter} />
          </div>
          <Movies movies={this.state.movies} searchFilter={this.state.searchFilter}/>
        </div>
      </div>
    )
  }
}

export default App;
