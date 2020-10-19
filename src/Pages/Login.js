import React, { Component } from 'react'
import Header from '../Components/Header/Header'
import FormGroup from '../Components/FormGroup/FormGroup'
import Input from '../Components/InputGroup/Input'
import Button from '../Components/InputGroup/Button'
import InputPassword from '../Components/InputGroup/InputPassword'
import InputWarning from '../Components/InputGroup/InputWarning';
import { validateEmail, validatePassword } from '../Functions/FormValidation'
import  verifyUserCredentials  from '../API/LogInUser'

import '../styles/Pages/Login/login.css'
export class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            userInput: {
                email: '',
                password: ''
            },
            errors: {
                email: '',
                password: ''
            }
        }
    }

    handleEmail=(email)=>{
        if(validateEmail(email)){
             this.setState((prevState)=>({
                userInput: {
                    ...prevState.userInput,
                    email: email
                }
            }), ()=>{
                this.sanitizeErrors("email")
            })
        }else
            this.createErrorMessage("email", "The email must be in format username@example.com")

    }

    handlePassword=(password)=>{
        if(validatePassword(password)){
            this.setState((prevState)=>({
                userInput: {
                    ...prevState.userInput,
                    password: password
                }
            }), ()=>{
                this.sanitizeErrors("password")
            })
        }else   
            this.createErrorMessage("password", "The password must be 8 characters long.")
    }

    createErrorMessage=(target, message)=>{
        this.setState((prevState)=>({
            errors: {
                ...prevState.errors,
                [target]: message
            }
        }), ()=>{
            this.sanitizeUserData(target)
        })
    }

    sanitizeUserData=(target)=>{
        this.setState((prevState)=>({
            userInput: {
                ...prevState.userInput,
                [target]: ""
            }
        }))
    }

    sanitizeErrors=(target)=>{
        this.setState((prevState)=>({
            errors: {
                ...prevState.errors,
                [target]: ''
            }
        }))
    }

    sendUserData=(event)=>{
        event.preventDefault()
        this.verifyInputIntegrity()
    }

    verifyInputIntegrity= async ()=>{
        const {email, password} = this.state.userInput
        if(email.length > 0 && password.length >= 8){
            const result = await verifyUserCredentials({email, password})
            console.log(result)
            if(result.success)
                this.startTimeout = setTimeout(()=>{
                    this.props.history.push('/')
                }, 1000)
            else if(result.user)
                this.createErrorMessage('email', result.user)
            else 
                this.createErrorMessage('password', result.password)
        }else{
            if(email.length === 0)
                this.createErrorMessage('email', 'This field is required.')
            
            if(password.length === 0)
                this.createErrorMessage('password', 'The password field is required.')
        }
    }

    setVisibility = ()=>{
        this.setState({alert: !this.state.alert.isAlertVisible})
    }

    render() {
        return (
            <div className="login">
                <Header title="LOG IN" subTitle="Good to see you back." goback={true} />
                <FormGroup>
                    <Input 
                        label="Email"
                        name="email"
                        type="email"
                        onChange={(e)=>this.handleEmail(e.target.value)}
                        error={this.state.errors.email}
                        required
                     />
                     <InputPassword 
                        label="Password"
                        name="password"
                        onChange={(e)=>this.handlePassword(e.target.value)}
                        error={this.state.errors.password}
                        required
                    />
                    <InputWarning
                        message="All fields are required. Please fill them out."
                    />
                    <Button 
                        message="Log In" 
                        type="submit" 
                        onClick={(e)=>this.sendUserData(e)}
                    />
                </FormGroup>
            </div>
        )
    }
}

export default Login
