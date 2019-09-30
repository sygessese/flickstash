import React, { Component } from 'react';
import Movie from './Movie.js';

class Movies extends React.Component {
  render () {
    var filteredMovies = this.props.movies.filter((movie)=>{
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
        <div className="container movie-container list-group">
            {filteredMovies.map((movie, index) => 
                <Movie key={index} movieTitle={movie['title']}/>
            )}
        </div>
      )
    }
  }
}

export default Movies;

// {props.movies.map((movie, index) => 
//   <Movie key={index} movieTitle={movie['title']}/>
// )}

// filter array of movies by searchterm, if array.length = 0, display 'none', else map