import React from "react"
import { TiEdit, TiDelete, } from "react-icons/ti"
import { format } from "date-fns"
import "./ExpensesView.css"

const Expense = ({ title, value, date, editExpense, removeExpense }) => {
    return (
        <div className="expense-item">
            <p className="expense-item-title">{title}</p>
            <p className="expense-item-value">{value}</p>
            <p className="expense-item-date">{date ? format(date, "dd.MM.yyyy") : ""}</p>
            <div className="expense-item-actions">
                <TiEdit className="expense-item-icon" onClick={editExpense} cursor="pointer" />
                <TiDelete className="expense-item-icon" onClick={removeExpense} cursor="pointer" />
            </div>
        </div>
    )
}

export { Expense }