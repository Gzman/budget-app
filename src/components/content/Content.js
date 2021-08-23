import React from "react"
import { BudgetForm } from "./BudgetForm"
import { ExpenseForm } from "./ExpenseForm"
import { BalanceView } from "./BalanceView"
import { ExpensesView } from "./ExpensesView"
import { useExpenses } from "../../hooks/useExpenses"
import { useBudget } from "../../hooks/useBudget"
import "./Content.css"

const Content = () => {
    const { expenses, addExpense, editExpense, removeExpense } = useExpenses();
    const { budget, setBudget } = useBudget();
    return (
        <div className="content">
            <div className="content-input">
                <BudgetForm setBudget={setBudget} />
                <ExpenseForm addExpense={addExpense} />
            </div>
            <div className="content-output">
                <BalanceView budget={budget} expenses={expenses} />
                <ExpensesView expenses={expenses} editExpense={editExpense} removeExpense={removeExpense} />
            </div>
        </div>
    )
}

export { Content }