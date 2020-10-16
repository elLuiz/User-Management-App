import React from 'react'
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';

import '../../styles/Components/Header/header.css';

const Header = ({children, title, subTitle, goback})=> {
    return (
        <header className="app-header">
            {children && children}
            {goback &&
                <div className="go-back">
                    <Link to="/"><i className="fas fa-chevron-left"></i></Link>
                </div>
            }
            <div className="description">
                <h1>{title}</h1>   
                <p>{subTitle}</p>
            </div>
        </header>
    )
}

Header.propTypes = {
    children: propTypes.node,
    title: propTypes.string,
    subTitle: propTypes.string,
    goback: propTypes.bool.isRequired
}

export default Header