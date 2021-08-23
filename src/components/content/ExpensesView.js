import React from "react"
import { Expense } from "./Expense"
import "./ExpensesView.css"

const ExpensesView = ({ expenses, editExpense, removeExpense }) => {
    return (
        <div className="expenses-view">
            <div className="expenses-view-header">
                <h3>Expense</h3>
                <h3>Value</h3>
            </div>
            {
                expenses.map((expense) =>
                    <Expense
                        key={expense.id}
                        title={expense.title}
                        value={expense.value}
                        editExpense={(title, value) => editExpense(expense.id, title, value)}
                        removeExpense={() => removeExpense(expense.id)}
                    />
                )
            }
        </div>
    )
}

export { ExpensesView }