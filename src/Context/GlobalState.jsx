import React, {createContext, useReducer} from "react";
import AppReducer from './AppReducer'

// Initial state
const initialState = {
    transactions: [
        {Id: 1, text: 'Flower', amount: -20},
        {Id: 2, text: 'Salary', amount: 300},
        {Id: 3, text: 'Camera', amount: 150},
        {Id: 4, text: 'Book', amount: -10}
    ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Create provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction(Id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: Id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (
    <GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction}}>
        {children}
    </GlobalContext.Provider>
    )
}