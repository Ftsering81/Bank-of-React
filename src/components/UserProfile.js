// src/components/UserProfile.js

import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import './css/UserProfile.css'
import NavigationLinks from './NavigationLinks';

class UserProfile extends Component {
    render() {
        return(
            <div className='UserProfile'>
                <img src="bank.jpeg" alt="bank"/>
                <h1> User Profile</h1>

                <div className="userName"> Username: {this.props.userName} </div>
                <div className="memberSince"> Member Since: {this.props.memberSince} </div>

                <NavigationLinks forView="UserProfile"/>
                <AccountBalance accountBalance={this.props.accountBalance}/>
            </div>
        );
    }
}

export default UserProfile;