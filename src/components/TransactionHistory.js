import React, { useContext } from 'react';
import { TransactionContext } from '../context/GlobalContext';

export const TransactionHistory = () => {

    let { transactions } = useContext(TransactionContext);

    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                {transactions.map((transObj, id)=>{
                    return(
                        <li key={id} className={transObj.amount < 0 ? "minus" : "plus"}>
                    {transObj.desc}
                    <span>${transObj.amount}</span>
                    <button className="delete-btn">X</button>
                </li>
                    )
                })}
            </ul>
        </div>
    );
}