import React from 'react';
import propTypes from 'prop-types';

const Options = ({options})=>{
    return (
        options.map((option)=>(
            <React.Fragment key={option.label}>
                <button  className="option"> <i className={option.icon}></i>  {option.label}</button>
            </React.Fragment>
        ))
    )    
}

Options.propTypes = {
    options: propTypes.array.isRequired
}

export default Options;