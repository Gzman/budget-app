import React from "react"
import { TiEdit, TiDelete, TiCancel } from "react-icons/ti"
import { BsBoxArrowInLeft } from "react-icons/bs" // cancel button or maybe reuse ExpenseForm in a modal?
import "./ExpensesView.css"

const Expense = ({ title, value, editExpense, removeExpense }) => {
    return (
        <div className="expense-item">
            <p className="expense-item-title">{title}</p>
            <p className="expense-item-value">{value}</p>
            <TiEdit onClick={editExpense} cursor="pointer" />
            <TiDelete onClick={removeExpense} cursor="pointer" />
        </div>
    )
}

export { Expense }

/*
        console.log("Was habe ich jetzt, wieder getan?");
        const calculateTotalCost = (expenses) => {
            return expenses.reduce((total, expense) => {
                return total + expense.value;
            }, 0);
        }

        Schon wieder wird versucht mir Schuld zuzufügen. Schon wieder
                
*/