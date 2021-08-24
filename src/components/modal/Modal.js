import React from "react"
import "./Modal.css"

const Modal = ({ title, render, close, children }) => {
    if (!render) {
        return null;
    }
    return (
        <div className="backdrop" >
            <div className="modal">
                <div className="modal-header">
                    <h3>{title}</h3>
                    <span className="modal-close" onClick={close}>X</span>
                </div>
                <div className="modal-body">
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