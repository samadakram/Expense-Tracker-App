import React, { useState , useContext } from 'react';
import { TransactionContext } from '../context/GlobalContext';

export const AddTransaction = ()=> {

    const { addTransaction } = useContext(TransactionContext);

    // State
    const [newDesc , setDesc] = useState("");
    const [newAmount , setAmount] = useState(0);

    const handleAddition = (e) =>{
        e.preventDefault();
        addTransaction({
            desc: newDesc,
            amount: +newAmount
        });

        setDesc("");
        setAmount("");
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
                           value={newDesc}
                           id="description" 
                           placeholder="Detail of Trnsaction"
                           onChange={(e)=>setDesc(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="transactionamount">
                        Transaction Amount
                    </label>
                    <input  type="number"
                            value={newAmount}
                            id="transactionamount"
                            placeholder="Enter Transaction amount"
                            onChange={(e)=> setAmount(e.target.value)}
                    />
                </div>
                <button className="btn">
                    Add Transaction
                </button>
            </form>
        </div>
    );
}