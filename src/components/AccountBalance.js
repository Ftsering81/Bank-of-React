// src/components/AccountBalance.js

import React, {Component} from 'react';

//This component takes the bank balance as a prop
class AccountBalance extends Component {
    render() {
        return (
            <div className="balance">
                Balance: {this.props.accountBalance}
            </div>
        );
    }
}

export default AccountBalance;