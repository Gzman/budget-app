import React, { useState } from "react"
import "./BudgetForm.css"

const BudgetForm = ({ setBudget }) => {
    const [budgetValue, setBudgetValue] = useState("");
    const [error, setError] = useState({
        isNegative: false,
        isNotSet: false,
    });

    const validate = () => {
        const isNegative = budgetValue < 0;
        const isNotSet = budgetValue === "";
        setError({
            isNegative,
            isNotSet,
        });
        return !isNegative && !isNotSet;
    }

    const reset = () => {
        setBudgetValue("");
        setError({
            isNegative: false,
            isNotSet: false,
        });
    }

    const handleOnChange = (e) => {
        validate();
        setBudgetValue(e.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        if (validate()) {
            setBudget(budgetValue);
            reset();
        }
    }

    return (
        <form id="budget-form" className="form">
            <div className="input">
                <label htmlFor="budget-input">Please enter your Budget</label>
                {error.isNegative && <p className="error">Budget can't be negative</p>}
                {error.isNotSet && <p className="error">Enter a Budget</p>}
                <input
                    id="budget-input"
                    type="number"
                    onChange={handleOnChange}
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