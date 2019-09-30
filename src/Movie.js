import React, { Component } from 'react';

const Movie = (props) => {

  var watched = props['watched'] ? <span className="badge badge-success">watched</span> : <span className="badge badge-warning"> 👀 pick me</span>;

  return (
    <li className="list-group-item list-group-item-dark d-flex justify-content-between align-items-center"><span>{props['movieTitle']}</span> {watched}</li>
  )
}

export default Movie;
