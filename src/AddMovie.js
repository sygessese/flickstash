import React, { Component } from 'react';
import API from './config/themoviedb.js';
import axios from 'axios';



class AddMovie extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          query: '',
          results: [],
          showResults: false
      }
    }

    render () {

        var modal = this.state.showResults ? <div>{this.state.results.map(movie => {
            <div>{movie.title}</div>
        })}</div> : <span></span>

        return (
            <div><form className="form-inline my-2 my-lg-0" id="addMovie" >
            <input className="form-control mr-sm-2" placeholder="Add a movie ..." id="newMovie" 
                    onChange={()=>{ this.setState({query: document.getElementById('newMovie').value})}}>
            </input>
            <a className="btn btn-primary btn-sm" href="#" role="button" 
                onClick={()=>{
                    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API}&language=en-US&query=${this.state.query}&page=1&include_adult=false`)
                        .then(result => {
                            this.setState({results: result.data.results, showResults: true}, ()=>{
                                this.props.addMovie({title: document.getElementById("newMovie").value, watched: false});
                            })
 
                        })
                        .catch(err => console.log(err))
                }}>Add</a>
            </form><div>{modal}</div></div>
        )
    } 
}

export default AddMovie;

// update state w search on change
// on click, do get request to movie API
// with results, display pop up box, did you mean: abc, or xyz
// exit out or select movie
// if select movie, send post request to add movie to array of movies


