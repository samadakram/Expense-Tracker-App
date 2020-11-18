import React from 'react';
import './App.css';

// Import Components
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { AccountSummary } from './components/AccountSummary';
import { TransactionHistory } from './components/TransactionHistory';
import { AddTransaction } from './components/AddTransaction';

// Import Provider
import { TransactionProvider } from './context/GlobalContext'

function App() {
  return (
    <TransactionProvider>
      <Header />
      <div className="container">
        <Balance />
        <AccountSummary />
        <TransactionHistory />
        <AddTransaction />
      </div>
    </TransactionProvider>
  );
}

export default App;
