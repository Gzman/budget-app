import { useState } from "react"
import uniqid from "uniqid"

const useExpenses = () => {
    const [expenses, setExpenses] = useState([]);

    const addExpense = (title, value) => {
        setExpenses(
            prevExpenses => [...prevExpenses, { id: uniqid(), title, value, }]
        );
    }

    const editExpense = (id, title, value) => {
        setExpenses(
            prevExpenses => prevExpenses
                .map((expense) => expense.id === id
                    ? { ...expense, title, value }
                    : expense)
        );
    }

    const removeExpense = (id) => {
        setExpenses(
            prevExpenses => prevExpenses
                .filter((expense) => expense.id !== id)
        );
    }

    return {
        expenses,
        addExpense,
        editExpense,
        removeExpense,
    }
}

export { useExpenses }