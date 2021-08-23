import React from "react"
import { Expense } from "./Expense"
import "./ExpensesView.css"

const ExpensesView = ({ expenses, editExpense, removeExpense }) => {
    return (
        <div className="expenses-view">
            <div className="expenses-view-header">
                <h2>Expense</h2>
                <h2>Value</h2>
            </div>
            {
                expenses.map((expense) => 
                    <Expense
                    key={expense.id}
                    title={expense.title}
                    value={expense.value}
                    editExpense={(title, value)=> editExpense(expense.id, title, value)}
                    removeExpense={() => removeExpense(expense.id)}
                    />
                )
            }
        </div>
    )
}

export { ExpensesView }