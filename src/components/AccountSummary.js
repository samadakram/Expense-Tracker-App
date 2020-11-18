import React from 'react';

export const AccountSummary = ()=> {

    return(
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">
                    $480
                </p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">
                    $20
                </p>
            </div>
        </div>
    );
}