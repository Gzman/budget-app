import { useEffect, useRef, useState } from "react"

const useBudgetFormValidation = (budget) => {
    const initialErrors = {
        budgetNotSet: "",
        budgetNegative: "",
    };
    const [errors, setErrors] = useState(initialErrors);
    const [realTimeValidation, setRealTimeValidation] = useState(false);

    const isMount = useRef(true);
    const onlyOnUpdate = (handler) => {
        if (isMount.current) {
            isMount.current = false;
        } else {
            handler();
        }
    }

    useEffect(() => {
        onlyOnUpdate(() => setRealTimeValidation(true));
        realTimeValidation && validate();
    }, [budget]);

    const resetErrors = () => {
        setErrors(initialErrors);
        setRealTimeValidation(false);
    }

    const validate = () => {
        let budgetNotSet = "";
        let budgetNegative = "";

        if (budget === "") {
            budgetNotSet = "Enter a Budget";
        }
        if (budget < 0) {
            budgetNegative = "Budget can't be negative";
        }
        setErrors({
            budgetNotSet,
            budgetNegative,
        });
        return !budgetNotSet && !budgetNegative;
    }

    return {
        errors,
        resetErrors,
        validate,
    }
}

export { useBudgetFormValidation }