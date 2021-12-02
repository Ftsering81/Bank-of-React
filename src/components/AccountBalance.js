// src/components/AccountBalance.js

import React, {Component} from 'react';

//This component takes the bank balance as a prop
class AccountBalance extends Component {
    render() {
        return (
            <div className="balance">
                <p style={{textAlign: 'center'}}> Balance: {this.props.accountBalance} </p>
            </div>
        );
    }
}

export default AccountBalance;