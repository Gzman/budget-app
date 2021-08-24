
const Modal = ({ render, close, children }) => {
    if (!render) {
        return null;
    }
    return (
        <div className="backdrop">
            <div className="modal">
                <div className="modal-content">
                    {children}
                </div>
                <div className="modal-footer">
                    <button className="close-btn" onClick={close}>Close</button>
                </div>
            </div>
        </div>
    )
}

export { Modal }