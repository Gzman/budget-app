import React, { useState } from "react"
import { Expense } from "./Expense"
import { SortSelect } from "./SortSelect"
import { Modal } from "../modal/Modal"
import { ExpenseForm } from "./forms/ExpenseForm"
import "./ExpensesView.css"

const ExpensesView = ({ expenses, editExpense, removeExpense, sortAfterInsertion, sortAfterTitle, sortAfterValue, sortAfterDate }) => {
    const [renderModal, setRenderModal] = useState(false);
    const [expenseToEdit, setExpenseToEdit] = useState(null);
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
            <Modal title={expenseToEdit?.title} render={renderModal} close={() => setRenderModal(false)}>
                <ExpenseForm
                    handleOnSubmit={(title, value, date) => {
                        editExpense(expenseToEdit.id, title, value, date);
                        setRenderModal(false);
                    }}
                    expenseToEdit={expenseToEdit}
                />
            </Modal>
        </div>
    )
}

export { ExpensesView }