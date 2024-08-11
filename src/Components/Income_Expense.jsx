import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

const Income_Expense = () => {

    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    // Getting total income from transactions
    const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => acc+=item, 0)
    .toFixed(2)

    // Getting total expense from transactions
    const expense = (amounts
        .filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0) * -1
    ).toFixed(2);

  return (
    <div className='incomeExpenseContainer'>
        <div className="incomeContainer">
            <p>Income</p>
            <p className="incomeValue">₹{income}</p>
        </div>
        <div className="expenseContainer">
            <p>Expense</p>
            <p className="expenseValue">₹{expense}</p>
        </div>
    </div>
  )
}

export default Income_Expense