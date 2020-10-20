import React, { Component } from 'react'
import '../../styles/Components/UserData/userdata.css';
import DataGroup from '../DataGroup/DataGroup';
import Options from '../Options/Options';

export class UserData extends Component {
    constructor(props){
        super(props)
        this.state={}
    }


    render() {
        const {user_name, user_email, account_created_at} = this.props.user
        return (
            <div className="user-configuration">
                <div className="screen-description">
                    <h1 className="welcome">Welcome, {user_name}</h1>
                    <p className="description">In this page you can manage your data.</p>
                </div>
                <div className="user-options">
                    <Options options={[{label: 'Personal Info', icon: 'far fa-id-card'}, {label: 'Security', icon: 'fas fa-fingerprint'}]} />
                </div>
                <div className="user-data-container">
                    <span className="header">
                        <h1>Profile</h1>
                    </span>

                    <div className="user-data">
                        <DataGroup 
                            data={[{data: user_name, label: 'NAME', isEditable: true}, {data: user_email, label: 'EMAIL', isEditable: true}, {data: new Date(account_created_at).toLocaleDateString(), label: 'ACCOUNT CREATED AT', isEditable: false}]} 
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default UserData
