import React, { Component } from 'react'

export class UserSecurityContainer extends Component {
    render() {
        return (
            <> 
                <div className="user-data-container">
                    <div className="user-option">
                        <div className="user-action-description">
                            <h2>Delete Account</h2>
                            <p>This action is irreversible. So be careful.</p>
                        </div>
                        <div className="user-action-button">
                            <button className="btn btn-danger">Delete Account</button>
                        </div>
                    </div>
                </div>

                <div className="user-data-container">
                    <div className="user-option">
                        <div className="user-action-description">
                            <h2>Log out</h2>
                            <p>Once you log out, you have to enter your credentials again in your next access.</p>
                        </div>

                        <div className="user-action-button">
                            <button className="btn btn-log-out">Log Out</button>
                        </div>

                        
                    </div>
                </div>
            </>
        )
    }
}

export default UserSecurityContainer
