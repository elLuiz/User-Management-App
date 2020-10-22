import React, { Component } from 'react'
import Nav from '../Components/Nav/Nav'
import '../styles/Pages/User/user.css';
import UserContainer from '../Components/User/UserContainer';

export class User extends Component {
    render() {
        return (
            <div className="user-page">
                <Nav/>
                <UserContainer />
            </div>
        )
    }
}

export default User
