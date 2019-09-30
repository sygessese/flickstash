import React, { Component } from 'react';

const Header = () => {
  return (
    <div>
    <h1 className="display-4">Movie list!</h1>
    <p className="lead">This is a simple app with add and search functionality.</p>
    <hr className="my-4"></hr>
    <p>Use the add bar to add to your collection, and the search bar below to narrow down to your favorite movies.</p>
    </div>
  )
}

export default Header;
