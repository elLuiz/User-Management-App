import React, { Component } from 'react'
import Nav from '../Components/Nav/Nav'
import '../styles/Pages/User/user.css';
import UserDataContainer from '../Components/User/UserDataContainer';

export class User extends Component {
    render() {
        return (
            <div className="user-page">
                <Nav path="/" icon="fas fa-home"/>
                <UserDataContainer />
            </div>
        )
    }
}

export default User
