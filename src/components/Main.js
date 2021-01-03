import React from 'react'
import {GlobalProvider} from './context/GlobalState.js'
import Header from './Header.js'
import Total from './Total.js'
import History from './History.js'
import AddTransaction from './AddTransaction.js'
import '../App.css'
export const Main = () => {
    return (
        <GlobalProvider>
            <div className="main">
            <Header/>
            <Total/>    
            <History/>
            <AddTransaction/>
            </div>
        </GlobalProvider>
    )
}


