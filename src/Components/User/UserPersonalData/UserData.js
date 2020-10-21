import React, { Component } from 'react'
import DataGroup from '../../DataGroup/DataGroup';
import ActiveLinkContext from '../../../Context/ActiveLink';

export class UserData extends Component {
    static contextType = ActiveLinkContext;
    render() {
        const {user_name, user_email, account_created_at} = this.props.user
        return (
            <>
                <div className="user-data-container">
                    <span className="header">
                        <h1>{this.context}</h1>
                    </span>

                    <div className="user-data">
                        <DataGroup 
                            data={[{data: user_name, label: 'NAME', isEditable: true}, {data: user_email, label: 'EMAIL', isEditable: true}, {data: new Date(account_created_at).toLocaleDateString(), label: 'ACCOUNT CREATED AT', isEditable: false}]} 
                        />
                    </div>
                </div>
            </>
        )
    }
}

export default UserData
