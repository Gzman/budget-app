import React from "react"
import { BudgetForm } from "./BudgetForm"
import { ExpenseForm } from "./ExpenseForm"
import { BalanceView } from "./BalanceView"
import { ExpensesView } from "./ExpensesView"
import "./Content.css"

const Content = () => {
    return (
        <div className="content">
            <div className="content-input">
                <BudgetForm />
                <ExpenseForm />
            </div>
            <div className="content-output">
                <BalanceView budgetAmount={"500"} expensesAmount={"300"} balanceResult={"200"} />
                <ExpensesView />
            </div>
        </div>
    )
}

export { Content }