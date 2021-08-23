import React from "react"
import "./BalanceView.css"

const BalanceView = ({budgetAmount, expensesAmount, balanceResult}) => {
    return (
        <div className="balance-view">
            <div className="budget">
                <h2 className="budget-label">Budget</h2>
                <img className="budget-icon"></img>
                <p id="budget-output-amount">{budgetAmount}</p>
            </div>
            <div className="expenses">
                <h2 className="expenses-label">Expenses</h2>
                <img className="expenses-icon"></img>
                <p id="expenses-output-amount">{expensesAmount}</p>
            </div>
            <div className="balance">
                <h2 className="balance-label">Balance</h2>
                <img className="balance-icon"></img>
                <p id="balance-output-amount">{balanceResult}</p>
            </div>
        </div>
    )
}

export { BalanceView }