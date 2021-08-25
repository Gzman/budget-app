import { useState } from "react"
import uniqid from "uniqid"

const useExpenses = () => {
    const [expenses, setExpenses] = useState([]);

    const addExpense = (title, value) => {
        setExpenses(
            prevExpenses => [...prevExpenses, { id: uniqid(), title, value, timestamp: Date.now(), }]
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

    const sortAfterInsertion = (asc = true) => {
        return setExpenses(
            expenses =>
                asc
                    ? [...expenses].sort((a, b) => a.timestamp - b.timestamp)
                    : [...expenses].sort((a, b) => b.timestamp - a.timestamp)
        )
    }

    const sortAfterTitle = (asc = true) => {
        setExpenses(
            expenses =>
                asc
                    ? [...expenses].sort((a, b) => a.title.localeCompare(b.title))
                    : [...expenses].sort((a, b) => b.title.localeCompare(a.title))
        );
    }

    const sortAfterValue = (asc = true) => {
        setExpenses(
            expenses =>
                asc
                    ? [...expenses].sort((a, b) => a.value - b.value)
                    : [...expenses].sort((a, b) => b.value - a.value)
        );
    }

    return {
        expenses,
        addExpense,
        editExpense,
        removeExpense,
        sortAfterInsertion,
        sortAfterTitle,
        sortAfterValue,
    }
}

export { useExpenses }