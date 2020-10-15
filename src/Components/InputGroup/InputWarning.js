import React from 'react'
import propTypes from 'prop-types';

const InputWarning = ({message})=>{
    return (
        <p className="warning">
          <i className="fas fa-exclamation-triangle"></i> {message}
        </p>
    )
}

InputWarning.propTypes = {
    message: propTypes.string.isRequired
}

export default InputWarning;


