import React, { useContext } from 'react';
import {GlobalContext} from './context/GlobalState' 
const History = () => {
 
    const {transactions} = useContext(GlobalContext);
    const {deleteTransaction} = useContext(GlobalContext);
    function isEmpty(){
        if(transactions.length>0){
            return {display:'none'};
        }
        else{
            return {display:'flex'};
        }

    }
    function incomeOrExpense(paisa)
    {
        return paisa>0?"historyItems historyIncome" : "historyItems historyExpense";
    }
    function incomeOrExpenseButton(paisa){
        return paisa > 0 ? "deleteBtnIncome": "deleteBtnExpense";
    }
    function createObjectList(){
        let list = transactions.map(transaction => (<div key={transaction.id} className={incomeOrExpense(transaction.amount)}>
        <span>{transaction.description}</span>
        <span>${transaction.amount}
        <span id={transaction.id} onClick={()=>deleteTransaction(transaction.id)} className={incomeOrExpenseButton(transaction.amount)}>X</span>
        </span>
    </div>))
        return list;
    }
        return (
            <div className="history">
            <h3>Transaction History</h3>
            <hr/>
            <span style={isEmpty()}>No transactions added yet!</span>
                {createObjectList()}
            </div>
        );
}

export default History;