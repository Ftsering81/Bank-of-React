// Login.js
import React, { Component } from 'react';
import { Redirect} from 'react-router-dom';
import "./css/Login.css"
import NavigationLinks from './NavigationLinks';

class LogIn extends Component {

    constructor () {
        super();
        this.state = {
            user: {
                userName: '',
                password: ''
            },
            redirect: false //keeps track of wheter to redirect to userProfile component or not
        }
    }
    //handles changes in the username input field by updating the userName property of user with the new username value
    handleChange = (e) => {
        const updatedUser = {...this.state.user} //creates a new copy of the this.state.user object
        const inputField = e.target.name
        const inputValue = e.target.value
        updatedUser[inputField] = inputValue
        
        this.setState({user: updatedUser}) //set this.state.user to the updatedUser object
        
    }
    //called when user clicks on the "Log In" button 
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.mockLogin(this.state.user);
        this.setState({redirect: true})
    }


    render() {
        //if redirect == true, then render the redirect component which will redirect to the user profile
        if(this.state.redirect) {
            return (<Redirect to="/userProfile"/>)
        }
        //else
        return (
            <div className="Login">
                <h1> Log In </h1>
                <form onSubmit={this.handleSubmit}>
                    <div> 
                        <label htmlFor="userName">User Name</label>
                        <input type="text" name="userName" onChange={this.handleChange} value={this.state.user.userName}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" />
                    </div>
                    <button>Log In</button>
                </form>
                <NavigationLinks forView="Login"/>
            </div>
        );
    }

}

export default LogIn;