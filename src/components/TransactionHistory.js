import React from 'react';

export const TransactionHistory = () => {


    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                <li className="plus">
                    Project 1 income
                    <span>$500</span>
                </li>
                <li className="minus">
                    Project 1 salaries
                    <span>-$100</span>
                </li>
            </ul>
        </div>
    );
}