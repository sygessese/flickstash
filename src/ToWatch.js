import React, { Component } from 'react';

const ToWatch = (props) => {

    var styles = props.viewType === "not watched" ? {backgroundColor: 'lightblue'} : {};

    return (
        <button className="btn btn-outline-secondary" style={styles} type="button" onClick={()=>{
            props.updateViewType("not watched")
        }}>To watch</button>
    )
}

export default ToWatch;