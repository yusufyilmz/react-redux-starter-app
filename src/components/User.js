
import React from 'react';
import { connect } from 'react-redux';

const User = (props) => {
    return (
        <div className="card card-block">
            <h4 className="card-title">{props.name}</h4>
            <p className="card-text">{props.company}</p>
            <a className="btn btn-primary" href={props.website}>Website</a>
        </div>);
};

export default User;




