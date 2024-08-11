import React from 'react'
import { GlobalContext } from '../Context/GlobalState';
import { useContext } from 'react';

const Transaction = ({transaction}) => {
    
    const {deleteTransaction} = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li id='listItem' className={transaction.amount < 0 ? 'minus' : 'plus'}>{transaction.text} <span className='transactionValue'>{sign}₹{Math.abs(transaction.amount)}</span>
    <button onClick={() => deleteTransaction(transaction.Id)} className='deleteBtn'>
        x
    </button>
    </li>
  )
}

export default Transaction