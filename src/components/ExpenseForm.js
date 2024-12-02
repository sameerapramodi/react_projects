// src/components/ExpenseForm.js
import React, { useState } from 'react';
import './ExpenseForm.css';


const ExpenseForm = ({ onAddExpense }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    if (title.trim() === '' || amount.trim() === '' || date.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }
    if (+amount <= 0) {
      alert('Please enter a valid amount.');
      return;
    }

    const expenseData = {
      title,
      amount: +amount,
      date: new Date(date),
    };
    onAddExpense(expenseData);
    setTitle('');
    setAmount('');
    setDate('');
  };


  return (
    <form onSubmit={submitHandler} className="expense-form">
      <div className="form-control">
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="form-control">
        <label>Amount</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <div className="form-control">
        <label>Date</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <button type="submit" className="btn">Add Expense</button>
    </form>

  );
};

export default ExpenseForm;
