import React, { useState } from 'react';
import propTypes from 'prop-types';
import '../../styles/Components/InputGroup/input.css';

const InputPassword = ({name, label, placeholder, error, ...rest})=>{
    const [isPassVisible, togglePassword] = useState(false);
    
    return(
        <div className="input-group">
            <label htmlFor={name}>{label}</label>
            <input className="app-input" id={name} type={isPassVisible ? 'text': 'password'} placeholder={placeholder}  {...rest}/>
            <i onClick={()=> togglePassword(!isPassVisible)} className={isPassVisible ? "fas fa-eye-slash": "fas fa-eye"}></i>
            {error.length > 0 && <p className="error" style={{opacity: 1}}>{error}</p>}
        </div>
    )
}

InputPassword.propTypes = {
    name: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    placeholder: propTypes.string,
}

export default InputPassword;