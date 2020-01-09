import React, { Component } from 'react';

const Header = () => {
  return (
    <div>
      <h1 className="display-4">Movie list!</h1>
      <p className="lead">This is a simple app with search and save functionality.</p>
      <hr className="my-4"></hr>
      <p>1) Find a movie</p>
      <p>2) Add it to your personal collection </p>
      <p>3) Filter your collection by title</p>
      <p>4) Update when you've watched a movie</p>
    </div>
  )
}

export default Header;
