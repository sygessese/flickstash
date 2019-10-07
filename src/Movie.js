import React, { Component } from 'react';

const Movie = (props) => {

  var watched = props['watched'] ? <span className="badge badge-success" onClick={() => { props.updateViewStatus(props.index) }}>watched!</span> : <span className="badge badge-warning" onClick={() => { props.updateViewStatus(props.index) }}> 👀 pick me</span>;

  var styles = props.viewOverview ? { backgroundColor: 'darkseagreen' } : {};

  var displayInfo = props.viewOverview ? <span><div className="movieInfo">Overview: {props.overview}</div><div className="movieYear">Year: {props.year}</div><div className="movieRating">Rating: {props.rating}</div><div>
    <button onClick={() => {
      console.log(props.id)
      props.deleteMovie(props.id)
    }}>Delete</button></div></span> : <span></span>;

  return (
    <li style={styles} className="list-group-item list-group-item-dark d-flex justify-content-between align-items-center" >
      <span onClick={() => { props.updateViewOverview(props.index) }}>
        <div className="movieTitle">{props['movieTitle']}</div>
        {displayInfo}
      </span>
      {watched}
    </li>
  )
}

export default Movie;
