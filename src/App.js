import React, { Component } from 'react';
import axios from 'axios';
import Search from './Search.js';
import Header from './Header.js';
import Movies from './Movies.js';
import AddMovie from './AddMovie.js';
import Watched from './Watched.js';
import ToWatch from './ToWatch.js';
import API from './config/themoviedb.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      searchFilter: '',
      viewType: 'all'
    }
    this.updateSearchFilter = this.updateSearchFilter.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.updateViewStatus = this.updateViewStatus.bind(this);
    this.updateViewType = this.updateViewType.bind(this);
    this.updateViewOverview = this.updateViewOverview.bind(this);
  }

  componentDidMount() {
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API}&language=en-US&page=1`)
      .then((res) => {
        console.log(res)
        var results = res.data.results.map(({title, overview, vote_average, release_date}, index) => (
           {title, overview, rating: vote_average, year: release_date.slice(0,4), viewOverview: false, watched: false, index: index}
        ))
        this.setState({ movies: results });
      })
      .catch(console.log);
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

  updateViewOverview (index) {
    let movies = [...this.state.movies]; // copy whole array
    let movie = {...movies[index]}; // destructure single item in array
    movie.viewOverview = !movie.viewOverview;
    movies[index] = movie; 
    this.setState({movies}, ()=> {console.log(this.state.movies[index])});
  }

  updateViewType (view) {
    var newView = this.state.viewType === view ? 'all' : view;
    this.setState({
      viewType: newView
    }, console.log(this.state.viewType))
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
            <Watched updateViewType={this.updateViewType} 
                     viewType={this.state.viewType} />
            <ToWatch updateViewType={this.updateViewType}
                     viewType={this.state.viewType} />
          </div>
          <Search updateSearchFilter={this.updateSearchFilter} />
        </div>
        <Movies movies={this.state.movies} 
                searchFilter={this.state.searchFilter} 
                updateViewStatus={this.updateViewStatus} 
                viewType={this.state.viewType}
                updateViewOverview={this.updateViewOverview} />
      </div>
    )
  }
}

export default App;
