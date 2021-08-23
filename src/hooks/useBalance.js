const useBalance = (expenses, budget) => {
    const calculateTotalCost = () => {
        return expenses.reduce((total, expense) => {
            return total + expense.value;
        }, 0);
    }

    const calculateBalance = () => {
        return budget - calculateTotalCost();
    }

    return {
        calculateTotalCost,
        calculateBalance,
    }
}

export { useBalance }