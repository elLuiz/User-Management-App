import React from 'react'
import propTypes from 'prop-types';
import '../../styles/Components/Header/header.css';

const Header = ({children})=> {
    return (
        <header className="app-header">
            {children}
        </header>
    )
}

Header.propTypes = {
    children: propTypes.node.isRequired
}

export default Header