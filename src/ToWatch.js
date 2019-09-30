import React, { Component } from 'react';

const ToWatch = (props) => {
    return (
        <button className="btn btn-outline-secondary" type="button" onClick={()=>{
            props.updateViewType("not watched")
        }}>To watch</button>
    )
}

export default ToWatch;