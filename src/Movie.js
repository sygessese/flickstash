import React, { Component } from 'react';

const Movie = (props) => {
  return (
    <div className="list-group-item">{props['movieTitle']}</div>
  )
}

export default Movie;
