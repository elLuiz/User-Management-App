import React from 'react'
import Logo from '../../img/Logo.svg';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../../styles/Components/Nav/nav.css';

const Nav = ({children})=>{
    return (
        <nav className="navbar">
            <div className="nav-item">
                <Link to="/">
                    <img src={Logo} alt="Logo" />                
                </Link>
            </div>
            <div className="nav-links">
                {children && children}
            </div>
        </nav>
    )
}

Nav.propTypes = {
    children: propTypes.node
}

Nav.defaultProps = {
    icon: 'far fa-user'
}

export default Nav;