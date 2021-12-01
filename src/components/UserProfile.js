// src/components/UserProfile.js

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './css/UserProfile.css'

class UserProfile extends Component {
    render() {
        return(
            <div className='UserProfile'>
                <h1> User Profile</h1>

                <div className="userName"> Username: {this.props.userName} </div>
                <div className="memberSince"> Member Since: {this.props.memberSince} </div>

                <Link to="/" style={{textDecoration:"none"}}>Home</Link> {/* Link to redirect back to Home */}
            </div>
        );
    }
}

export default UserProfile;