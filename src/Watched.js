import React, { Component } from 'react';

const Watched = (props) => {
  return (
    <button className="btn btn-outline-secondary" type="button" onClick={()=>{
      props.updateViewType("watched")
  }}>Watched</button>
  )
}

export default Watched;