import React, { useState } from "react"
import { Expense } from "./Expense"
import { SortSelect } from "./SortSelect"
import { Modal } from "../modal/Modal"
import { ExpenseForm } from "./forms/ExpenseForm"
import "./ExpensesView.css"

const ExpensesView = ({ expenses, editExpense, removeExpense, sortAfterInsertion, sortAfterTitle, sortAfterValue, sortAfterDate }) => {
    const [expenseToEdit, setExpenseToEdit] = useState(null);
    const [renderModal, setRenderModal] = useState(false);
    return (
        <div className="expenses-view">
            <div className="expenses-view-header">
                <h3>Expense</h3>
                <h3>Value</h3>
                <h3>Date</h3>
                <SortSelect
                    sortAfterInsertion={sortAfterInsertion}
                    sortAfterTitle={sortAfterTitle}
                    sortAfterValue={sortAfterValue}
                    sortAfterDate={sortAfterDate}
                />
            </div>
            {
                expenses.map((expense) =>
                    <Expense
                        key={expense.id}
                        title={expense.title}
                        value={expense.value}
                        date={expense.date}
                        editExpense={() => {
                            setExpenseToEdit(expense);
                            setRenderModal(true);
                        }}
                        removeExpense={() => removeExpense(expense.id)}
                    />
                )
            }
            <Modal render={renderModal} close={() => setRenderModal(false)}>
                <ExpenseForm
                    editExpense={(title, value, date) => editExpense(expenseToEdit.id, title, value, date)}
                    expenseToEdit={expenseToEdit}
                />
            </Modal>
        </div>
    )
}

export { ExpensesView }