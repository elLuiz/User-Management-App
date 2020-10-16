import React from 'react';
import propTypes from 'prop-types';
import '../../styles/Components/InputGroup/input.css';

const Input = ({name, label, placeholder,error, icon,...rest})=>{
    return(
        <div className="input-group">
            <label htmlFor={name}>{label}</label>
            <input className="app-input" id={name} type="text" placeholder={placeholder}  {...rest}/>
            {error.length > 0 && <i className="fas fa-exclamation-triangle"></i>}
            {error.length > 0 && <p className="error" style={{opacity: 1}}>{error}</p>}
        </div>
    )
}

Input.propTypes = {
    name: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    placeholder: propTypes.string,
    icon: propTypes.string,
}

export default Input;