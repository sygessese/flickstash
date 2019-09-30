import React, { Component } from 'react';

const Search = (props) => {
  return (
    <input type="text" className="form-control search" placeholder="Search >>>" aria-describedby="button-addon3" id=
    "search" onChange={()=>{props.updateSearchFilter(document.getElementById("search").value)}}></input>
  )
}



export default Search;