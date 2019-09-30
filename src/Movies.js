import React, { Component } from 'react';
import Movie from './Movie.js';

class Movies extends React.Component {
  render () {

    // viewtype = all, watched, not watched
    var movies = this.props.movies;
    if (this.props.viewType === "watched") {
      movies = movies.filter((movie)=>{
        return movie['watched'];
      })
    } else if (this.props.viewType === "not watched") {
      movies = movies.filter((movie)=>{
        return !(movie['watched']);
      })
    }

    var filteredMovies = movies.filter((movie)=>{
      let movieLowerCase = movie['title'].toLowerCase();
      let searchLowerCase = this.props.searchFilter.toLowerCase();
      return movieLowerCase.includes(searchLowerCase);
    })

    if (filteredMovies.length === 0) {
      return (
        <div> You're being too picky. </div>
      )
    } else {
      return (
        <ul className="list-group container movie-container">
          {filteredMovies.map((movie, index) => 
              <Movie key={index} index={index} movieTitle={movie['title']} watched={movie['watched']} updateViewStatus={this.props.updateViewStatus}/>
          )}
        </ul>
      )
    }

  }
}

export default Movies;


// if viewtype = all, display all
// if viewtype = watched, display only true
// if viewtype = not watched, display only false
