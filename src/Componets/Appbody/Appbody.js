import React, { useState } from 'react';
import EmpoyeesList from '../../employees/employees.json';
import Employee from '../Employee/Employee';
import Accounts from '../Accounts/Accounts';
import './Appbody.css';

const Appbody = () => {

    const [employees, setEmployees] = useState(EmpoyeesList); //employees data 
    const [accounts, setAccounts] = useState([]);

    const addToAccounts = (newData) => {
        const newAccounts = [...accounts,newData]; 
        setAccounts(newAccounts);
    }
    return (
        <div className="app-body">
            <div className="employee-container">
                {
                    employees.map(employee => <Employee addToAccounts={addToAccounts} employee={employee}></Employee>) //using map to reuse/add automatically from "employees.js" 
                }
            </div>
            <div className="accounts-container">
                <Accounts accounts={accounts}></Accounts>
            </div>
        </div>
    );
};

export default Appbody;