import React, { Component } from 'react';
import Search from './Search.js';
import Header from './Header.js';
import Movies from './Movies.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ],
      searchFilter: ''
    }
    this.updateSearchFilter = this.updateSearchFilter.bind(this);
  }

  updateSearchFilter(query) {
    this.setState({
      searchFilter: query
    }, ()=>{console.log(this.state)})
  }

  render() {
    return (
      <div className="jumbotron">
        <Header />
        <Search updateSearchFilter={this.updateSearchFilter} />
        <Movies movies={this.state.movies} searchFilter={this.state.searchFilter}/>
      </div>
    )
  }
}

export default App;
