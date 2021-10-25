import React from "react";

function CategoryForm({ handleSubmit, heading, value, setValue, setShowModal, confirmButtonText }) {

    return (
        <form onSubmit={handleSubmit} className="CategoryForm">
            <h3>{heading}</h3>
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                placeholder="Book category..."
                autoFocus
            />
            <button className="cancel" role="button" onClick={() => setShowModal(false)}>
                cancel
            </button>
            <button className="confirm">
                {confirmButtonText}
            </button>
        </form>

    )
}


export default CategoryForm