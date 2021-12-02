// src/components/Home.js
import "./css/Home.css"
import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import NavigationLinks from "./NavigationLinks";


class Home extends Component {
    render() {
        return (
            <div className="Home">
                <img src="/Bank-of-React/bank.jpeg" alt="bank"/>
                <h1>Bank of React</h1>

                <NavigationLinks forView="Home"/> {/* the nagivation links to other views */}

                <h2> Account Balance</h2>
                <AccountBalance accountBalance= {this.props.accountBalance} />
            </div>
        );
    }
}

export default Home;