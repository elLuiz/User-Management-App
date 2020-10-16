import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SignUp from './Pages/SignUp';
import Index from './Pages/Index';
import Login from './Pages/Login';

export default function Routes() {
    return (
        <Router>
            <Route exact path="/" component={Index} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
        </Router>
    )
}
