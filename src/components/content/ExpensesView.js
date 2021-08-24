import React, { useState } from "react"
import { Expense } from "./Expense"
import { SortSelect } from "./SortSelect"
import { Modal } from "../modal/Modal"
import { ExpenseForm } from "./forms/ExpenseForm"
import "./ExpensesView.css"

const ExpensesView = ({ expenses, editExpense, removeExpense, sortAfterTitle, sortAfterValue }) => {
    const [expenseToEdit, setExpenseToEdit] = useState(null);
    const [renderModal, setRenderModal] = useState(false);
    return (
        <div className="expenses-view">
            <div className="expenses-view-header">
                <h3>Expense</h3>
                <h3>Value</h3>
                <SortSelect
                    sortAfterTitle={sortAfterTitle}
                    sortAfterValue={sortAfterValue}
                />
            </div>
            {
                expenses.map((expense) =>
                    <Expense
                        key={expense.id}
                        title={expense.title}
                        value={expense.value}
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
                    editExpense={(title, value) => editExpense(expenseToEdit.id, title, value)}
                    expenseToEdit={expenseToEdit}
                />
            </Modal>
        </div>
    )
}

export { ExpensesView }