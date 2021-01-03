import React, { useState,useContext } from 'react';
import {GlobalContext} from './context/GlobalState' 

const AddTransaction = () => {
    
    let [state,setState] = useState({text:"", amount:0});
    const {addTransaction} =useContext(GlobalContext);
    const {transactions} = useContext(GlobalContext);
    function clearForm(){
        setState({text:"", amount:0});
    }
    function addRecord(){
        if(state.text==="" || state.text===undefined)
        {
            alert("Error! Enter a valid description!");
        }
        else if(state.amount===0 || state.amount===undefined)
        {
            alert("Error! Enter a valid amount!");
        }
        else{

            let newTransaction = {id:transactions[transactions.length-1].id+1, description: state.text, amount:parseInt(state.amount)};
            addTransaction(newTransaction);
            clearForm();
        }
    }
        return (
            <div className="add-transaction">
                <h3>Add Transaction</h3>
                <hr/>
                <label htmlFor="desc">Description:</label>
                <input type="text" id="desc" placeholder="Enter description" value={state.text} onChange={(e)=>setState({...state, text: e.target.value})}/>
                <label htmlFor="amount">Amount:</label>
                <input type="number" id="amount" placeholder="-ive -> expense, +ive -> income" value={state.amount} onChange={(e)=>setState({...state, amount:e.target.value})}/>
                <button className="btn" onClick={addRecord.bind(this)}>Add</button>
            </div>
        );
}

export default AddTransaction;