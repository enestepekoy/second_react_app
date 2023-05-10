const Cell = ({ id, cell, setCells, go, setGo, cells, winningMessage, handleCellChange }) => {
    const handleClick = (e) => {
        const taken = cell !== '';

        if (!taken && !winningMessage) {
            if (go === "circle") {
                handleCellChange("circle", id)
                setGo("cross")
            }
            if (go === "cross") {
                handleCellChange("cross", id)
                setGo("circle")
            }
        }
    }


    return (
        <div className="square" id={id} onClick={handleClick}>
            <div className={cell}></div>
        </div>
    )
};

export default Cell;