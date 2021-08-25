import React, { useState } from "react"
import { useBudgetFormValidation } from "../../../hooks/useBudgetFormValidation"
import "./BudgetForm.css"

const BudgetForm = ({ setBudget }) => {
    const [budgetValue, setBudgetValue] = useState("");
    const { errors, resetErrors, validate } = useBudgetFormValidation(budgetValue);

    const reset = () => {
        setBudgetValue("");
        resetErrors();
    }

    const submit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (isValid) {
            setBudget(parseFloat(budgetValue));
            reset();
        }
    }

    return (
        <form id="budget-form" className="form">
            <div className="input">
                <label htmlFor="budget-input">Please enter your Budget</label>
                {errors.budgetNotSet && <p className="error">{errors.budgetNotSet}</p>}
                {errors.budgetNegative && <p className="error">{errors.budgetNegative}</p>}
                <input
                    id="budget-input"
                    type="number"
                    onChange={(e) => setBudgetValue(e.target.value)}
                    value={budgetValue}
                />
            </div>
            <div className="submit">
                <button type="submit" onClick={submit}>Calculate</button>
            </div>
        </form>
    )
}

export { BudgetForm }