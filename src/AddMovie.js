import React, { Component } from 'react';

const AddMovie = (props) => {
    return (
        <form className="form-inline my-2 my-lg-0" id="addMovie" >
        <input className="form-control mr-sm-2" placeholder="Add a movie ..." id="newMovie"></input>
        <a className="btn btn-primary btn-sm" href="#" role="button" onClick={()=>{
                props.addMovie({title: document.getElementById("newMovie").value, watched: false});
                document.getElementById("newMovie").value = "";
            }}>Add</a>
        </form>
    )
}

export default AddMovie;