import React, { Component } from 'react';

const Search = (props) => {
  return (
    <div>
    <form className="form-inline my-2 my-lg-0">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id=
    "search" onChange={()=>{props.updateSearchFilter(document.getElementById("search").value)}}></input>
    <a className="btn btn-primary btn-sm" href="#" role="button">Go!</a>
    </form>
    </div>
  )
}

export default Search;