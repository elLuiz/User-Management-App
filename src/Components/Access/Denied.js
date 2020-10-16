import React from 'react'
import '../../styles/Components/Access/denied.css';
import { Link } from 'react-router-dom';
import SVGDenied from '../SVG/SVGDenied';
export default function Denied() {
    return (
        <div className="denied-page">
            <div className="col-1">
                <div className="image">
                    <SVGDenied />
                </div>
            </div>

            <div className="col-2">
                <div className="error">
                    <h1>Ouch, Comrade.</h1>
                    <p>You don't have access to this page. To access this page create an account or log in.</p>
                </div>

                <div className="actions">
                    <Link className="denied-page-button" id="signup" to="/signup">Sign Up</Link>
                    <Link className="denied-page-button" id="login" to="login">Log In</Link>
                </div>

            </div>



        </div>
    )
}
