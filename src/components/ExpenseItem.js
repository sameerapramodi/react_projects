// src/components/ExpenseItem.js
import React from 'react';
import './ExpenseItem.css';

const ExpenseItem = ({ expense }) => {
  return (
    <li>
      <div>{expense.title}</div>
      <div>{expense.amount}</div>
      <div>{expense.date.toDateString()}</div>
    </li>
  );
};

export default ExpenseItem;
