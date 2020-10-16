import React, { Component } from 'react'
import axios from 'axios';
import Denied from '../Components/Access/Denied';


export class Index extends Component {
    constructor(props){
        super(props)
        this.state={
            isUserLogged: false
        }
    }
    async componentDidMount(){
        try{
            const response = await axios.get('/checkCredentials', {withCredentials: true});
            if(response.statusText==="OK")
                this.setState({isUserLogged: true})
        }catch(err){
            console.log(err)
        }
    }
    render() {
        const {isUserLogged} = this.state;
        if(isUserLogged)
            return (
                <div>
                    <h1>Welcome back, user</h1>
                </div>
            )
        else
            return(
                <Denied />
            )
    }
}

export default Index
