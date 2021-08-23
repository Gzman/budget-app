import { useState } from "react"

const useBalance = () => {
    const [balance, setBalance] = useState(0);

    return {
        balance, setBalance,
    }
}

export { useBalance }