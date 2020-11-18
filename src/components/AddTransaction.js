import React, {useContext} from 'react';
import { TransactionContext } from '../context/GlobalContext';

export const AddTransaction = ()=> {

    const { addTransaction } = useContext(TransactionContext);

    const handleAddition = (e) =>{
        e.preventDefault();
    }

    return(
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={handleAddition}>
                <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input type="text" 
                           id="description" 
                           placeholder="Detail of Trnsaction"
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="transactionamount">
                        Transaction Amount
                    </label>
                    <input  type="number"
                            id="transactionamount"
                            placeholder="Enter Transaction amount"
                    />
                </div>
                <button className="btn">
                    Add Transaction
                </button>
            </form>
        </div>
    );
}