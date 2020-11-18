import React from 'react';

export const TransactionHistory = () => {

    let transactions = [
        {desc: "Project 1 Income", amount: 500},
        {desc: "Project 1 Salaries", amount: -100},
        {desc: "Project 2 Income", amount: 1000},
        {desc: "Project 2 Salaries", amount: -500},
    ];

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