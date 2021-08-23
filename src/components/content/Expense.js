import React from "react"
import "./ExpensesView.css"

const Expense = ({ title, value, editExpense, removeExpense }) => {
    return (
        <div className="expense-item">
            <p className="expense-item-title">{title}</p>
            <p className="expense-item-value">{value}</p>
            <button className="expense-item-edit-btn" onClick={editExpense}>Edit</button>
            <button className="expense-item-remove-btn" onClick={removeExpense}>Remove</button>
        </div>
    )
}

export { Expense }