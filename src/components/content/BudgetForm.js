import Reacr from "react"
import "./BudgetForm.css"

const BudgetForm = () => {
    return (
        <form id="budget-form" className="form">
            <div className="input">
                <label htmlFor="budget-input">Please enter your Budget</label>
                <input
                    id="budget-input"
                    type="number"
                    onChange={() => console.log("OnChange")}
                    value={"0"}
                    min="0"
                />
            </div>
            <div className="submit">
                <button type="submit" onClick={() => console.log("Calculate Balance")}>Calculate</button>
            </div>
        </form>
    )
}

export { BudgetForm }