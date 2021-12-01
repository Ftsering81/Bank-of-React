// src/components/Home.js
import "./css/Home.css"
import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom'


class Home extends Component {
    render() {
        return (
            <div className="Home">
                <img src="bank.jpeg" alt="bank"/>
                <h1>Bank of React</h1>

                <div className="Links">
                   <span> <Link to="/login" style={{textDecoration:"none"}}>Log in</Link> </span>
                   <span> <Link to="/userProfile" style={{textDecoration:"none"}}>User Profile</Link> </span>{/* Link component allows us to add a link to a path or url*/}
                </div>
                <h2> Account Balance</h2>
                <AccountBalance accountBalance= {this.props.accountBalance} />
            </div>
        );
    }
}

export default Home;