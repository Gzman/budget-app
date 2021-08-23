import { useState } from "react"

const useBudget = () => {
    const [budget, setBudget] = useState(0);

    return {
        budget, setBudget,
    }
}

export { useBudget }