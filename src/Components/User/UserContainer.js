import React, { Component } from 'react';
import UserDataContainer from './UserPersonalData/UserDataContainer';
import PageDescription from '../PageDescription/PageDescription';
import '../../styles/Components/UserData/userdata.css';
import Options from '../Options/Options';
import ActiveLinkContext from '../../Context/ActiveLink';

export class UserContainer extends Component {
    constructor(props){
        super(props)
        this.state={
            activeLink: 'Personal Info'
        }
    }

    setActiveLink = (label)=>{
        this.setState({activeLink: label})
    }


    render() {
        return (
            <div className="user-configuration">
                    <PageDescription welcome={'Luiz'} description={'In this page you can manage your profile'} />
                    <div className="user-options">
                        <Options setActiveLink={this.setActiveLink} activeLink={this.state.activeLink} />
                    </div>
                    <ActiveLinkContext.Provider value={this.state.activeLink}>
                        {this.state.activeLink === 'Personal Info' && <UserDataContainer />}
                    </ActiveLinkContext.Provider>
                </div>
        )
    }
}

export default UserContainer
