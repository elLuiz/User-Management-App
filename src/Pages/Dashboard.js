import React from 'react'
import Nav from '../Components/Nav/Nav';
import UserDashboard from '../Components/UserDashboard/UserDashboard';
import { Link } from 'react-router-dom';

export default function Dashboard() {
    return (
        <div className='dashboard'>
            <Nav>
                <Link className="link" to="/users"> 
                    <i className="fas fa-users"></i> 
                    <p className="description"> Users </p>
                </Link>
                <Link className="link" to="/user"> 
                    <i className="fas fa-cog"> </i>
                    <p className="description"> Account </p> 
                </Link>
            </Nav>

            <div className="dashboard-container">
                <UserDashboard />
            </div>
        </div>
    )
}
