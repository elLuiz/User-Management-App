import React, { Component } from 'react'
import '../styles/Pages/SignUp/signup.css';
import Header from '../Components/Header/Header';
import FormGroup from '../Components/FormGroup/FormGroup';
import Input from '../Components/InputGroup/Input';
import InputPassword from '../Components/InputGroup/InputPassword';
import Button from '../Components/InputGroup/Button';
import InputWarning from '../Components/InputGroup/InputWarning';
import validateName, { validateEmail, validatePassword } from '../Functions/FormValidation';
import Alert from '../Components/Alert/Alert';
import insertUser from '../API/InsertUser';

export class SignUp extends Component {
    constructor(props){
        super(props);
        this.state={
            userInput: {
                name: '',
                email: '',
                password: ''
            },
            errors:{
                name: '',
                email: '',
                password: ''
            },
            alert: {
                isAlertVisible: false,
                className: '',
                message: ''
            },
            isSendable: false
        }
    }

    componentWillUnmount(){
        clearTimeout(this.componentWillUnmount)
    }

    // Validation functions
    handleName=(name)=>{   
        if(validateName(name)){
            this.setState((prevState)=>({
                userInput: {
                    ...prevState.userInput,
                    name: name
                }
            }), ()=>{
                this.sanitizeErrors("name")
            })
        }else
            this.createErrorMessage("name", "Invalid name.")

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

    // TODO: Verify the input and display the alert
    sendUserData= async (event)=>{
        event.preventDefault();
        
        const {name, email, password} = this.state.userInput;
        const userInfo = {name, email, password}
        
        await this.verifyInputIntegrity(userInfo);
        
        if(this.state.isSendable){
            const response = await insertUser(userInfo);
            if(response.success){
                this.setState((prevState)=> ({
                    alert: {
                        ...prevState.alert,
                        isAlertVisible: true,
                        message: 'Congrats. You\'ve just created an account',
                        className: 'alert-success'
                    }
                }))
                this.startInterval = setTimeout(()=>{
                    this.props.history.push('/')
                }, 2500)
            }else if(response.error)
                this.setState((prevState)=> ({
                    alert: {
                        ...prevState.alert,
                        isAlertVisible: true,
                        message: 'Oops. Something went wrong.',
                        className: 'alert-danger'
                    }, 
                    errors: {
                        ...prevState.errors,
                        email: 'This email is already taken. Please try another email.' 
                    }
                }))
        }
        else
            this.setState((prevState)=>({
                ...prevState.alert,
                isAlertVisible: true,
                message: 'Ouch! You\'ve entered some wrong datas.',
                className: 'alert-danger'
            }))
    }

    verifyInputIntegrity= async ({name, email, password})=>{
        if(name.length === 0)
            this.createErrorMessage('name', "The name field is required.")
        if(email.length === 0)
            this.createErrorMessage('email', "The email field is required.")
        if(password.length === 0)
            this.createErrorMessage('password', "The password field is required.")
        
        if(name.length > 0 && email.length > 0 && password.length > 0)
            this.setState({isSendable: true})
    }

    setAlertVisibility=()=>{
        this.setState({isAlertVisible: !this.state.isAlertVisible})
    }
 
    render() {
        return (
            <div className="sign-up">
                <Alert
                    message={this.state.alert.message}
                    className={this.state.alert.className}
                    isVisible={this.state.alert.isAlertVisible}
                    setVisibility={this.setAlertVisibility}
                />
                <Header title="SIGN UP" subTitle="Create and account and enjoy." goback={true} />
                <FormGroup>
                    <Input 
                        label="Name"
                        name="name"
                        placeholder="Your name"
                        // icon="fas fa-exclamation-triangle"
                        onChange={(event)=>this.handleName(event.target.value)}
                        error={this.state.errors.name.length > 0 ? this.state.errors.name: ''}
                        required
                    />
                    <Input 
                        label="Email"
                        name="email"
                        placeholder="Your email"
                        type="email"
                        // icon="fas fa-exclamation-triangle"
                        onChange={(event)=>this.handleEmail(event.target.value)}
                        error={this.state.errors.email.length > 0 ? this.state.errors.email: ''}
                        required
                    />

                    <InputPassword 
                        label="Password"
                        name="password"
                        placeholder=""
                        onChange={(event)=>this.handlePassword(event.target.value)}
                        error={this.state.errors.password.length > 0 ? this.state.errors.password: ''}
                        required
                    />

                    <InputWarning
                        message="All fields are required. Please fill them out."
                    />
                    <Button 
                        message="CREATE ACCOUNT"
                        type="submit"
                        onClick={(e)=>this.sendUserData(e)}
                    />

                </FormGroup>
            </div>
        )
    }
}

export default SignUp
