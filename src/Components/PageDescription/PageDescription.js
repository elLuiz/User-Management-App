import React from 'react'
import propTypes from 'prop-types';

const PageDescription = ({welcome, description})=>{
    return (
        <div className="screen-description">
            {welcome && <h1 className="welcome">Welcome, {welcome}</h1>}
            <p className="description">{description}</p>
        </div>
    )
}

PageDescription.propTypes = {
    welcome: propTypes.string,
    description: propTypes.string.isRequired
}

export default PageDescription