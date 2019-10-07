import React, { Component } from 'react';

const ChooseMovie = (props) => {
  return (
    <div className="ChooseMovie-holder">
      <div>
        <img src={"http://image.tmdb.org/t/p/w185/" + (props.movie.poster_path !== null ? props.movie.poster_path : props.movie.backdrop_path)}></img>
      </div>
      <div className="ChooseMovie-info">
        {props.movie.original_title.length > 25 ? props.movie.original_title.slice(0, 25) + "..." : props.movie.original_title} <br></br>
        Rating: {props.movie.vote_average} <br></br>
        Year: {props.movie.release_date.slice(0, 4)} <br></br><br></br>
        {props.movie.overview.length > 110 ? (props.movie.overview.slice(0, 110) + "...") : props.movie.overview} <br></br>
        <button className="btn btn-primary btn-sm" onClick={() => {
          props.updateShowResults();
          props.addMovie({
            id: props.movie.id,
            title: props.movie.title,
            overview: props.movie.overview,
            vote_average: props.movie.vote_average,
            release_date: props.movie.release_date
          })
        }}>I'm the one!</button>
      </div>
    </div>
  )
}

export default ChooseMovie;
