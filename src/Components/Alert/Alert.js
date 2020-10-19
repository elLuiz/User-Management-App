import React from 'react'
import propTypes from 'prop-types';
import '../../styles/Components/Alert/alert.css';

// classNames: alert-danger, alert-success, alert-warning

const Alert= ({isVisible, message, className})=>{
    
    return (
        <div className={className.length > 0 ? "alert " + className : "alert"} style={{display: isVisible ? 'flex': 'none'}}>
            <p className={className}>{message}</p>
        </div>
    )
}

Alert.propTypes = {
    message: propTypes.string.isRequired,
    className: propTypes.string.isRequired,
    isVisible: propTypes.bool.isRequired,
    setVisibility: propTypes.func.isRequired
}

export default Alert;