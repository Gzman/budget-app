import React from "react"
import "./ExpenseForm.css"

const ExpenseForm = () => {
    return (
        <form id="expense-form">
            <div className="input">
                <lablel htmlFor="expense-title-input">Please enter a Expense</lablel>
                <input
                    id="expense-title-input"
                    type="text"
                    onChange={() => console.log("Handle expense title")}
                    value={"0"}
                    minLength="1"
                />
            </div>
            <div className="input">
                <label htmlFor="expense-amount-input">Please enter the Expense amount</label>
                <input
                    id="expense-amount-input"
                    type="number"
                    onChange={() => console.log("Handle expense amount")}
                    value={"0"}
                />
            </div>
            <div className="submit">
                <button type="submit" onClick={() => console.log("Submit expense")}>Add Expense</button>
            </div>
        </form>
    )
}

export { ExpenseForm }