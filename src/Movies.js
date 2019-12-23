import React, { Component } from 'react';
import Movie from './Movie.js';

class Movies extends React.Component {
  render() {
    console.log('re-rendered');
    var movies = this.props.movies;
    if (this.props.viewType === "watched") {
      movies = movies.filter((movie) => {
        return movie['watched'];
      })
    } else if (this.props.viewType === "not watched") {
      movies = movies.filter((movie) => {
        return !(movie['watched']);
      })
    }

    var filteredMovies = movies.filter((movie) => {
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
          {filteredMovies.map((movie, id) =>

            <Movie key={id}
              index={movie['index']}
              movieTitle={movie['title']}
              watched={movie['watched']}
              overview={movie.overview}
              rating={movie['rating']}
              year={movie.year}
              id={movie['id']}
              viewOverview={movie.viewOverview}
              deleteMovie={this.props.deleteMovie}
              updateMovie={this.props.updateMovie}
              updateViewOverview={this.props.updateViewOverview}
              updateViewStatus={this.props.updateViewStatus} />
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
