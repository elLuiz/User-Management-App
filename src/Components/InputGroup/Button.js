import React from 'react';
import propTypes from 'prop-types';


const Button = ({type, message,...rest})=>{
    return (
        <div className="input-group">
            <button className="input-group-button" type={type} {...rest}>{message} </button>           
        </div>
    )
}

Button.propTypes = {
    type: propTypes.string.isRequired,
    message: propTypes.string.isRequired
}

export default Button;