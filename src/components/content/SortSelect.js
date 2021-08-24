
const SortSelect = ({ sortAfterTitle, sortAfterValue }) => {
    const options = {
        "...": null,
        "Title": sortAfterTitle,
        "Value": sortAfterValue,
    };

    return (
        <select
            className="sort-expense-select"
            onChange={(e) => options[e.target.value]?.call()}
        >
            {
                Object.keys(options).map((option) =>
                    <option key={option} >{option}</option>
                )
            }
        </select>
    )
}

export { SortSelect }