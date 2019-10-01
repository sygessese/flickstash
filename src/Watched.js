import React, { Component } from 'react';

const Watched = (props) => {

  var styles = props.viewType === "watched" ? {backgroundColor: 'lightblue'} : {};

  return (
    <button className="btn btn-outline-secondary" style={styles} type="button" onClick={()=>{
      props.updateViewType("watched")
  }}>Watched</button>
  )
}

export default Watched;