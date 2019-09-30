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
        {title: 'Mean Girls', watched: false},
        {title: 'Hackers', watched: false},
        {title: 'The Grey', watched: true},
        {title: 'Sunshine', watched: false},
        {title: 'Ex Machina', watched: true},
      ],
      searchFilter: ''
    }
    this.updateSearchFilter = this.updateSearchFilter.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.updateViewStatus = this.updateViewStatus.bind(this);
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

  updateViewStatus (index) {
    let movies = [...this.state.movies]; // copy whole array
    let movie = {...movies[index]}; // destructure single item in array
    movie['watched'] = !movie['watched'];
    movies[index] = movie; 
    this.setState({movies}, console.log(this.state));
  }

  render() {
    return (
      <div className="jumbotron">
        <Header />
        <div className="addMovie">
          <AddMovie addMovie={this.addMovie}/>
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend" id="button-addon3">
            <Watched />
            <ToWatch />
          </div>
          <Search updateSearchFilter={this.updateSearchFilter} />
        </div>
        <Movies movies={this.state.movies} searchFilter={this.state.searchFilter} updateViewStatus={this.updateViewStatus}/>
      </div>
    )
  }
}

export default App;
