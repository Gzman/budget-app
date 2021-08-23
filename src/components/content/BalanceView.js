import React from "react"
import { useBalance } from "../../hooks/useBalance"
import { FaMoneyBillAlt } from "react-icons/fa"
import { AiOutlineEuro, AiOutlineCreditCard } from "react-icons/ai"
import "./BalanceView.css"

const BalanceView = ({ budget, expenses }) => {
    const { calculateBalance, calculateTotalCost } = useBalance(expenses, budget);
    return (
        <div className="balance-view">
            <div className="budget">
                <h3 className="budget-label">Budget</h3>
                <FaMoneyBillAlt fontSize="3.5rem" />
                <p id="budget-output-amount">{budget}</p>
            </div>
            <div className="expenses">
                <h3 className="expenses-label">Expenses</h3>
                <AiOutlineCreditCard fontSize="3.5rem" />
                <p id="expenses-output-amount">{calculateTotalCost()}</p>
            </div>
            <div className="balance">
                <h3 className="balance-label">Balance</h3>
                <AiOutlineEuro fontSize="3.5rem" />
                <p id="balance-output-amount">{calculateBalance()}</p>
            </div>
        </div>
    )
}

export { BalanceView }