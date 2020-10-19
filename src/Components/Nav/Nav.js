import React from 'react'
import Logo from '../../img/Logo.svg';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../../styles/Components/Nav/nav.css';

const Nav = ({path, icon})=>{
    return (
        <nav className="navbar">
            <div className="nav-item">
                <img src={Logo} alt="Logo" />                
            </div>
            <div className="nav-item flex-end">
                <Link to={path}>
                    <i className={icon}></i>
                </Link>
            </div>
        </nav>
    )
}

Nav.propTypes = {
    path: propTypes.string.isRequired,
    icon: propTypes.string
}

Nav.defaultProps = {
    icon: 'far fa-user'
}

export default Nav;