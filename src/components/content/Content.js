import React from "react"
import { BudgetForm } from "./forms/BudgetForm"
import { ExpenseForm } from "./forms/ExpenseForm"
import { ColapseWrapper } from "./forms/ColapseWrapper"
import { BalanceView } from "./BalanceView"
import { ExpensesView } from "./ExpensesView"
import { useExpenses } from "../../hooks/useExpenses"
import { useBudget } from "../../hooks/useBudget"
import "./Content.css"

// const pixelValStr = getComputedStyle(document.documentElement)
//     .getPropertyValue("--mobile-view-width");
// const mobileViewPortWidth = parseInt(pixelValStr.substr(pixelValStr.length - 3));
const MOBILE_VIEW_PORT = 1400;

const Content = () => {
    const {
        expenses,
        addExpense,
        editExpense,
        removeExpense,
        sortAfterInsertion,
        sortAfterTitle,
        sortAfterValue,
        sortAfterDate,
    } = useExpenses();

    const {
        budget,
        setBudget
    } = useBudget();

    return (
        <div className="content">
            <div className="content-input">
                <ColapseWrapper title="Set Budget" maxWidth={MOBILE_VIEW_PORT} >
                    <BudgetForm setBudget={setBudget} />
                </ColapseWrapper>
                <ColapseWrapper title="Add Expense" maxWidth={MOBILE_VIEW_PORT} >
                    <ExpenseForm handleOnSubmit={addExpense} />
                </ColapseWrapper>
            </div>
            <div className="content-output">
                <BalanceView budget={budget} expenses={expenses} />
                <ExpensesView
                    expenses={expenses}
                    editExpense={editExpense}
                    removeExpense={removeExpense}
                    sortAfterInsertion={sortAfterInsertion}
                    sortAfterTitle={sortAfterTitle}
                    sortAfterValue={sortAfterValue}
                    sortAfterDate={sortAfterDate}
                />
            </div>
        </div>
    )
}

export { Content }