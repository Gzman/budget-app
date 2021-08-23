import React from "react"
import { Expense } from "./Expense"
import "./ExpensesView.css"

const ExpensesView = () => {
    return (
        <div className="expenses-view">
            <div className="expenses-view-header">
                <h2>Expense</h2>
                <h2>Value</h2>
            </div>
            <Expense
                title={"Haus kauf"}
                value={"200"}
                editExpense={() => console.log("Edit expense")}
                removeExpense={() => console.log("Remove expense")}
            />
            <Expense
                title={"Auto kauf"}
                value={"500"}
                editExpense={() => console.log("edit expense")}
                removeExpense={() => console.log("remove expense")}
            />
        </div>
    )
}

export { ExpensesView }