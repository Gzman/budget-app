import { useEffect, useState } from "react"
import { useLocalStorage } from "./useLocalStorage";

const useBudget = () => {
    const [budget, setBudget] = useState(0);
    const { save, load } = useLocalStorage("budget", { budget });

    useEffect(() => {
        try {
            const budgetObj = load();
            setBudget(
                budgetObj ? budgetObj.budget : 0
            );
        } catch (err) {
            console.log(err);
        }
    }, []);

    useEffect(() => {
        save();
    }, [budget]);

    return {
        budget, setBudget,
    }
}

export { useBudget }