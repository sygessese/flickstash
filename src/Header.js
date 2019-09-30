import React, { Component } from 'react';

const Header = () => {
  return (
    <div>
    <h1 className="display-4">Movie list!</h1>
    <p className="lead">This is a simple app with search functionality to find information about movies</p>
    <hr className="my-4"></hr>
    <p>Use the search bar below to pull up your favorite movies.</p>
    </div>
  )
}

export default Header;
