import React from 'react';
import './Accounts.css'

const Accounts = (props) => {

    const totalPaidAmount = props.accounts.reduce((account,current) => {
        return account + parseInt(current.salary); //adding salary values[clicking "pay me" button will add up]

    },0) //initial value = 0

    return (
        <div className="accounts">
            <h3>TEch FoR AlL</h3>
            <p>Employee Paid: {props.accounts.length}</p>
            <p>Total Paid Amount: ${totalPaidAmount}</p>
            <button className="pay-btn">Reset Me!!!</button>
        </div>
    );
};

export default Accounts;