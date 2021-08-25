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
            <TiEdit onClick={editExpense} cursor="pointer" />
            <TiDelete onClick={removeExpense} cursor="pointer" />
        </div>
    )
}

export { Expense }