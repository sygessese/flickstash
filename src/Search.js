import React, { Component } from 'react';

const Search = () => {
  return (
    <div>
    <form className="form-inline my-2 my-lg-0">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id=
    "search"></input>
    <a className="btn btn-primary btn-lg" href="#" role="button" onClick={()=>{alert(document.getElementById("search").value)}}>Go!</a>
    </form>
    </div>
  )
}

export default Search;

//() => this.setState({showDescription: !this.state.showDescription})