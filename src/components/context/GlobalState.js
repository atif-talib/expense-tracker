import React, { createContext, useReducer}  from 'react';
import AppReducer from './AppReducer.js';

const initialState = {
    transactions: [
        {id:1,description:"Pocket Money",amount:100}
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) =>{

    let [state,dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction(id){
        dispatch(
            {
                type: 'DELETE',
                payload: id
            }
        )
    }

    function addTransaction(transaction){
        dispatch(
            {
                type: 'ADD',
                payload: transaction
            }
        )
    }
    return (
        <GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction}} >
            {props.children}
        </GlobalContext.Provider>
    )
}