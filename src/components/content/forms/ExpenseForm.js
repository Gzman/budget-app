import React, { useState } from "react"
import { useExpenseFormValidation } from "../../../hooks/useExpenseFormValidation"
import { format } from "date-fns"
import "./ExpenseForm.css"

const ExpenseForm = ({ handleOnSubmit, expenseToEdit }) => {
    const [expenseTitle, setExpenseTitle] = useState(expenseToEdit ? expenseToEdit.title : "");
    const [expenseValue, setExpenseValue] = useState(expenseToEdit ? expenseToEdit.value : "");
    const [expenseDate, setExpenseDate] = useState(expenseToEdit?.date ? format(expenseToEdit.date, "yyyy-MM-dd") : "");
    const { errors, resetErrors, validate } = useExpenseFormValidation(expenseTitle, expenseValue);

    const reset = () => {
        setExpenseTitle("");
        setExpenseValue("");
        setExpenseDate("");
        resetErrors();
    }

    const submit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (isValid) {
            handleOnSubmit(
                expenseTitle,
                parseFloat(expenseValue),
                expenseDate !== "" ? new Date(expenseDate) : null,
            );
            reset();
        }
    }

    return (
        <form id="expense-form">
            <div className="input">
                <label htmlFor="expense-title-input">Please enter a Expense</label>
                {errors.expenseTitleNotSet && <p className="error">{errors.expenseTitleNotSet}</p>}
                <input
                    id="expense-title-input"
                    type="text"
                    onChange={(e) => setExpenseTitle(e.target.value)}
                    value={expenseTitle}
                    minLength="1"
                />
            </div>
            <div className="input">
                <label htmlFor="expense-amount-input">Please enter the Expense amount</label>
                {errors.expenseValueNotSet && <p className="error">{errors.expenseValueNotSet}</p>}
                <input
                    id="expense-amount-input"
                    type="number"
                    onChange={(e) => setExpenseValue(e.target.value)}
                    value={expenseValue}
                />
            </div>
            <div className="input">
                <label htmlFor="expense-date-input">Enter a date of the expense</label>
                <input
                    id="expense-date-input"
                    type="date"
                    onChange={(e) => setExpenseDate(e.target.value)}
                    value={expenseDate}
                />
            </div>
            <div className="submit">
                <button type="submit" onClick={submit}>{expenseToEdit ? "Save changes" : "Add Expense"}</button>
            </div>
        </form>
    )
}

export { ExpenseForm }