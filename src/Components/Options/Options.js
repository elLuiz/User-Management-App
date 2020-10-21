import React from 'react';
import propTypes from 'prop-types';

export default class Options extends React.PureComponent{
    constructor(props){
        super(props)
        this.state={
            links: [
                {label: 'Personal Info', icon: 'far fa-id-card'},
                {label: 'Security', icon: 'fas fa-fingerprint'}

            ]
        }
    }   
    render(){
        const {setActiveLink, activeLink} = this.props
        const {links} = this.state;
        return(
            links.map((link)=>(
                <React.Fragment key={link.label}>
                    <button className={activeLink === link.label ? 'option active': 'option'} onClick={()=> setActiveLink(link.label)}> <i className={link.icon}></i>  {link.label}</button>
                </React.Fragment>
            ))
        )
    }    
}

Options.propTypes = {
    setActiveLink: propTypes.func.isRequired,
    activeLink: propTypes.string.isRequired
}
