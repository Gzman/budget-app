import { useEffect, useState } from "react";

const SortSelect = ({ sortAfterInsertion, sortAfterTitle, sortAfterValue, sortAfterDate }) => {
    const sortDirections = {
        "asc": true,
        "desc": false,
    }
    const sortFunctions = {
        "...": sortAfterInsertion,
        "Title": sortAfterTitle,
        "Value": sortAfterValue,
        "Date": sortAfterDate,
    };
    const [isAscending, setIsAscending] = useState(true);
    const [sortKey, setSortKey] = useState(Object.keys(sortFunctions)[0]);

    useEffect(() => {
        sortFunctions[sortKey](isAscending);
    }, [isAscending, sortKey]);

    return (
        <div className="sort-expense">
            <select
                className="sort-expense-sort-direction"
                onChange={(e) => setIsAscending(sortDirections[e.target.value])}
            >
                {
                    Object.keys(sortDirections)
                        .map((option) =>
                            <option key={option}>{option}</option>
                        )
                }
            </select>
            <select
                className="sort-expense-select"
                onChange={(e) => setSortKey(e.target.value)}
            >
                {
                    Object.keys(sortFunctions).map((option) =>
                        <option key={option} >{option}</option>
                    )
                }
            </select>
        </div>
    )
}

export { SortSelect }