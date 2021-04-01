import React from 'react'

const IncomeExpense = () => {
    return (
        <>
           <div className="inc-exp-container">
               <div>
                   <h1>Income</h1>
                   <p className="money plus">+$0.00</p>
               </div>
               <div>
                   <h1>Expense</h1>
                   <p className="money minus">-$0.00</p>
               </div>
           </div> 
        </>
    )
}

export {IncomeExpense}
