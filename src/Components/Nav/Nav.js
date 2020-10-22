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
                {path &&
                    <Link to={path}>
                        <i className={icon}></i>
                    </Link>
                }
            </div>
        </nav>
    )
}

Nav.propTypes = {
    path: propTypes.string,
    icon: propTypes.string,
}

Nav.defaultProps = {
    icon: 'far fa-user'
}

export default Nav;