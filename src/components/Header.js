import React,{useContext} from 'react';
import '../App.css'
import {GlobalContext} from './context/GlobalState' 
const Header = () =>{
    const {transactions} = useContext(GlobalContext);
    function calculateBalance() {
        let balance = 0;
        for(let i = 0; i < transactions.length; i++) {
            balance+=parseInt(transactions[i].amount);
        }
        return balance;
    }
        return (
            <div className="Header">
            <h1>
                Expense Tracker
            </h1>
            <h2>
            Balance: $
            {calculateBalance()}
            </h2>
            </div>
        );
}

export default Header;