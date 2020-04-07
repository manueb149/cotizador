import React from 'react';
import './Spinner.css';
import PropTypes from 'prop-types';

const Spinner = ({spinner}) => {

    if(!spinner) return null;

    return (
        <div className="sk-folding-cube">
            <div className="sk-cube1 sk-cube"></div>
            <div className="sk-cube2 sk-cube"></div>
            <div className="sk-cube4 sk-cube"></div>
            <div className="sk-cube3 sk-cube"></div>
        </div> 
    );
}

Spinner.propTypes = {
    spinner: PropTypes.bool.isRequired
}
 
export default Spinner;