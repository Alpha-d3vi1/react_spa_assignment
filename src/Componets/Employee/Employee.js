import React,{useState} from 'react';
import './Employee.css';

const Employee = (props) => {

    const {name,photo,designation,email,salary} = props.employee;  //taking data from employees.js
    const [isPaid, setIsPaid] = useState(false);

    let paymentButton = <button onClick={() => {props.addToAccounts(props.employee); setIsPaid(true)} } className="pay-btn">Pay Me</button>
    ;
    
    //Disable "pay me" button from using multiple times =>

    if(isPaid){
        paymentButton = <button className="paid-btn" disabled>Paid</button>;
    }

    return (
        <div className="aEmployee">
            <img src={photo} alt=""/>
            <h3>{name}</h3> 
            <p>{designation}</p>
            <p><small>Mail: {email}</small></p>
            <p>Salary: ${salary}</p>
            {paymentButton}
        </div>
    );
};

export default Employee;