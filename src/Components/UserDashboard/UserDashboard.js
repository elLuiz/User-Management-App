import React from 'react'
import empty from '../../img/empty.svg';
import '../../styles/Components/UserDashboard/userdashboard.css';

export default function UserDashboard() {
    return (
        <div className="empty-dashboard">
            <img src={empty} alt="Nothing to display" />
            <p className="description">You have no data to display yet.</p>
        </div>
    )
}
