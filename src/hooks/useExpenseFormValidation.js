import { useEffect, useRef, useState } from "react";

const useExpenseFormValidation = (expenseTitle, expenseValue) => {
    const initialErrors = {
        expenseTitleNotSet: "",
        expenseValueNotSet: "",
    };
    const [errors, setErrors] = useState(initialErrors);
    const [realTimeValidation, setRealTimeValidation] = useState(false);

    const isMount = useRef(true);
    const onlyOnUpdate = (callback) => {
        if (isMount.current) {
            isMount.current = false;
        } else {
            callback();
        }
    }

    useEffect(()=> {
        onlyOnUpdate(() => setRealTimeValidation(true));
    }, [expenseTitle, expenseValue])

    useEffect(() => {
        realTimeValidation && validateTitle();
    }, [expenseTitle]);

    useEffect(() => {
        realTimeValidation && validateValue();
    }, [expenseValue]);

    const resetErrors = () => {
        setErrors(initialErrors);
        setRealTimeValidation(false);
    }

    const validateTitle = () => {
        let expenseTitleNotSet = "";
        if (expenseTitle === "") {
            expenseTitleNotSet = "Enter a title";
        }
        setErrors(errors => ({
            ...errors,
            expenseTitleNotSet,
        }));
        return !expenseTitleNotSet;
    }

    const validateValue = () => {
        let expenseValueNotSet = "";
        if (expenseValue === "") {
            expenseValueNotSet = "Enter a amount value";
        }
        setErrors(errors => ({
            ...errors,
            expenseValueNotSet,
        }));
        return !expenseValueNotSet;
    }

    const validate = () => {
        const titleIsValid = validateTitle();
        const valueIsValid = validateValue();
        return titleIsValid && valueIsValid;
    }

    return {
        errors,
        resetErrors,
        validate,
    }
}

export { useExpenseFormValidation }