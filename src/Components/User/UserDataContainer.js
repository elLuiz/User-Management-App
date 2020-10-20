import React, { Component } from 'react';
import getUser from '../../API/GetUser';
import UserData from './UserData';
import Loading from '../Loading/Loading';

export class UserDataContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: {}, 
            loading: true
        }
    }

    async componentDidMount(){
        const response = await getUser()
        if(response.data)
            this.setState({
                user: response.data,
                loading: false
            })
        
    }
    render() {
        const {loading, user} = this.state
        if(loading)
            return (
                <Loading />
            )
        else
            return (
                <UserData user={user}/>
            )
    }
}

export default UserDataContainer
