import React from 'react'

const IncomeExpense = () => {
    return (
        <>
           <div className="inc-exp-container">
               <div>
                   <h1>Income</h1>
                   <p id="money-plus" className="money plus">+$0.00</p>
               </div>
               <div>
                   <h1>Expense</h1>
                   <p id="money-minus" className="money minus">-$0.00</p>
               </div>
           </div> 
        </>
    )
}

export {IncomeExpense}
