import React, { createContext } from 'react';

let initialTransactions = [
    {desc: "Project 1 Income", amount: 500},
    {desc: "Project 1 Salaries", amount: -100},
    {desc: "Project 2 Income", amount: 1000},
    {desc: "Project 2 Salaries", amount: -500},
];

export const TransactionContext = createContext(initialTransactions);