import React from 'react'
import Header from './Components/Header'
import Balance from './Components/Balance'
import Income_Expense from './Components/Income_Expense'
import TransactionList from './Components/TransactionList'
import Add_Transaction from './Components/Add_Transaction'
import { GlobalProvider } from './Context/GlobalState'

const App = () => {
  return (
    <GlobalProvider>
    <Header />
    <Balance />
    <Income_Expense />
    <TransactionList />
    <Add_Transaction />
    </GlobalProvider>
  )
}

export default App