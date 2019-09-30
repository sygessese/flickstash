import React, { Component } from 'react';

const Search = (props) => {
  return (
    <div>
    <form className="form-inline my-2 my-lg-0">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id=
    "search" onChange={()=>{props.updateSearchFilter(document.getElementById("search").value)}}></input>
    <a className="btn btn-primary btn-lg" href="#" role="button">Go!</a>
    </form>
    </div>
  )
}

export default Search;

// to do: 
// on click, instead of alerting, trigger function that maps through movie list 
// and changes some property to allow different rendering based on if title contains
// value from search

//() => this.setState({showDescription: !this.state.showDescription})