import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import Transaction from './Transaction'

const TransactionList = () => {

    const {transactions} = useContext(GlobalContext)

  return (
    <div className='transactionListContainer'>
        <h3 className='subHeader'>History</h3>
        <ul className="list">
            {transactions.map(transaction => (
                <Transaction key={transaction.Id} transaction={transaction}/>
            ))}
        </ul>
    </div>
  )
}

export default TransactionList