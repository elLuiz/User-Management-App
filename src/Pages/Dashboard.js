import React from 'react'
import Nav from '../Components/Nav/Nav';
import UserDashboard from '../Components/UserDashboard/UserDashboard';

export default function Dashboard() {
    return (
        <div className='dashboard'>
            <Nav 
                path={"/user"}
            />
            <div className="dashboard-container">
                <UserDashboard />
            </div>
        </div>
    )
}
