import React, { createContext, useReducer } from 'react';
import TransactionReducer from './TransactionReducer';

let initialTransactions = [
    {desc: "Project 1 Income", amount: 500},
    {desc: "Project 1 Salaries", amount: -100},
    {desc: "Project 2 Income", amount: 1000},
    {desc: "Project 2 Salaries", amount: -500},
];

export const TransactionContext = createContext(initialTransactions);


export const TransactionProvider = ({children}) => {

    let [state , dispatch] = useReducer(TransactionReducer, initialTransactions);

    function addTransaction(transObj) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                desc: transObj.desc,
                amount: transObj.amount
            },
        })
    }
    
    return(
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
}