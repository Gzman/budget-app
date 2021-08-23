import React from "react"
import { useBalance } from "../../hooks/useBalance"
import "./BalanceView.css"

const BalanceView = ({budget, expenses}) => {
    const { calculateBalance, calculateTotalCost } = useBalance(expenses, budget);
    return (
        <div className="balance-view">
            <div className="budget">
                <h2 className="budget-label">Budget</h2>
                <img className="budget-icon"></img>
                <p id="budget-output-amount">{budget}</p>
            </div>
            <div className="expenses">
                <h2 className="expenses-label">Expenses</h2>
                <img className="expenses-icon"></img>
                <p id="expenses-output-amount">{calculateTotalCost()}</p>
            </div>
            <div className="balance">
                <h2 className="balance-label">Balance</h2>
                <img className="balance-icon"></img>
                <p id="balance-output-amount">{calculateBalance()}</p>
            </div>
        </div>
    )
}

export { BalanceView }