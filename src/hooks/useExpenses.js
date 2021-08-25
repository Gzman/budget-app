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

    const sortAfterInsertion = () => {
        return setExpenses([...expenses].sort((a, b) => a.timestamp - b.timestamp));
    }

    const sortAfterTitle = () => {
        setExpenses([...expenses].sort((a, b) => a.title.localeCompare(b.title)));
    }

    const sortAfterValue = () => {
        setExpenses([...expenses].sort((a, b) => a.value - b.value));
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