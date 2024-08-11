import React from 'react'
import { useState } from 'react'
import { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

const Add_Transaction = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext);

    function clearInputFields(){
        setText('');
        setAmount('');
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            Id: Math.floor(Math.random() * 10000000),
            text,
            amount: parseInt(amount)
        }

        if(text === '' || amount === ''){
            Toastify({
                text: "Please fill all the fields!",
                duration: 3000,
                close: false,
                gravity: "top",
                position: "right",
                backgroundColor: "red",
            }).showToast();
        }else{
            addTransaction(newTransaction);
            Toastify({
                text: "Transaction successfully added!",
                duration: 3000,
                close: false,
                gravity: "top",
                position: "right",
                backgroundColor: "#4CAF50",
            }).showToast();
        }

        clearInputFields();
    }

  return (
    <div className='addTransactionContainer'>
        <form onSubmit={onSubmit} className='transactionForm'>
            <h3 className='subHeader'>Add new transaction</h3>
            <label className='labelHeader' htmlFor="Text">Text</label>
            <div>
                <input type="text" className="textInputValue" id="Text" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <label className='labelHeader' htmlFor="Amount">Amount <br /> <span>(negative - expense, positive - income)</span></label>
            <div>
                <input type="number" className="" id="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>
            <button className='addTransactionBtn' type='submit'>Add Transaction</button>
        </form>
    </div>
  )
}

export default Add_Transaction