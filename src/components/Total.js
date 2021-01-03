import '../App.css'
import React, { useContext } from 'react';
import {GlobalContext} from './context/GlobalState' 
const Total = () => {
    
    const {transactions} = useContext(GlobalContext);
    function Income(){
        let income = 0;
        for(let i =0;i<transactions.length;i++){
            if(transactions[i].amount>=0)
                income += parseInt(transactions[i].amount);
        }
        return income;
    }
    function Expense(){
        let expense = 0;
        for(let i =0;i<transactions.length;i++){
            if(transactions[i].amount<0)
                expense += parseInt(transactions[i].amount);
        }
        return expense;
    }
    
        return (
            <div className="total">
                <div className="income">
                    Income
                </div>
                <div className="total-amount">
                $
                {Income()}
                </div>
                <div className="expense">
                    Expense
                </div>
                <div className="total-amount">
                $
                {Expense()}
                </div>
            </div>
        );
}

export default Total;