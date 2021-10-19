import React, { Children, useRef } from "react";

function Modal({children, showModal, setShowModal}){

    const modalRef = useRef()

    const closeModal = (e) => {
        if(e.target === modalRef.current){
            setShowModal(false)
        }
    }
    return(
        showModal && 
        <div className="Modal">
            <div className="container">
                {children}
            </div>
        </div>
    )
}

export default Modal