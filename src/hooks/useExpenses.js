import { useEffect, useState } from "react"
import { useLocalStorage } from "./useLocalStorage"
import uniqid from "uniqid"

const useExpenses = () => {
    const [expenses, setExpenses] = useState([]);
    const { save, load } = useLocalStorage("expenses", expenses);

    useEffect(() => {
        try {
            const savedExpenses = load();
            setExpenses(
                savedExpenses
                    ? savedExpenses
                        .map((expense) => ({
                            ...expense,
                            date: expense.date ? new Date(expense.date) : null
                        }))
                    : []
            );
        } catch (err) {
            console.log(err);
        }
    }, []);

    useEffect(() => {
        save();
    }, [expenses]);

    const addExpense = (title, value, date) => {
        setExpenses(
            prevExpenses => [
                ...prevExpenses,
                {
                    id: uniqid(),
                    title,
                    value,
                    date,
                    timestamp: Date.now(),
                }
            ]
        );
    }

    const editExpense = (id, title, value, date) => {
        setExpenses(
            prevExpenses => prevExpenses
                .map((expense) => expense.id === id
                    ? { ...expense, title, value, date, }
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

    const sortAfterDate = (asc = true) => {
        setExpenses(
            expenses =>
                asc
                    ? [...expenses].sort((a, b) => a.date - b.date)
                    : [...expenses].sort((a, b) => b.date - a.date)
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
        sortAfterDate,
    }
}

export { useExpenses }