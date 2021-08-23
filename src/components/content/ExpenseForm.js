import React, { useState } from "react"
import "./ExpenseForm.css"

const ExpenseForm = ({ addExpense }) => {
    const [expenseTitle, setExpenseTitle] = useState("");
    const [expenseValue, setExpenseValue] = useState("");
    const [error, setError] = useState({
        isTitleNotSet: false,
        amountIsNotSet: false,
    });

    const validate = () => {
        const isTitleNotSet = expenseTitle.length === 0;
        const amountIsNotSet = expenseValue.length === 0;
        setError({
            isTitleNotSet,
            amountIsNotSet,
        });
        return !isTitleNotSet && !amountIsNotSet;
    }

    const handleTitle = (e) => {
        validate();
        setExpenseTitle(e.target.value);
    }

    const handleAmount = (e) => {
        validate();
        setExpenseValue(e.target.value);
    }

    const reset = () => {
        setExpenseTitle("");
        setExpenseValue("");
        setError({
            isTitleNotSet: false,
            amountIsNotSet: false,
        });
    }

    const submit = (e) => {
        e.preventDefault();
        if (validate()) {
            addExpense(expenseTitle, parseFloat(expenseValue));
            reset();
        }
    }

    return (
        <form id="expense-form">
            <div className="input">
                <label htmlFor="expense-title-input">Please enter a Expense</label>
                {error.isTitleNotSet && <p className="error">You must enter a title</p>}
                <input
                    id="expense-title-input"
                    type="text"
                    onChange={handleTitle}
                    value={expenseTitle}
                    minLength="1"
                />
            </div>
            <div className="input">
                <label htmlFor="expense-amount-input">Please enter the Expense amount</label>
                {error.amountIsNotSet && <p className="error">Enter a Expense amount</p>}
                <input
                    id="expense-amount-input"
                    type="number"
                    onChange={handleAmount}
                    value={expenseValue}
                />
            </div>
            <div className="submit">
                <button type="submit" onClick={submit}>Add Expense</button>
            </div>
        </form>
    )
}

export { ExpenseForm }