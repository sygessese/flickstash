import React, { Component } from 'react';

const Movie = (props) => {

  var watched = props['watched'] ? <span className="badge badge-success" onClick={()=>{props.updateViewStatus(props.index)}}>watched!</span> : <span className="badge badge-warning" onClick={()=>{props.updateViewStatus(props.index)}}> 👀 pick me</span>;

  return (
    <li className="list-group-item list-group-item-dark d-flex justify-content-between align-items-center"><span>{props['movieTitle']}</span> {watched}</li>
  )
}

export default Movie;
