import React,{useState} from 'react'
import Modal from './Modal'

function AddNewBook(){
    const [showModal, setShowModal] = useState(false)
    return (
        <div className='AddNewBook'>
            <div className="btn">
            <button onClick={ () => setShowModal(true)}>
                + New Book
            </button>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <div>
                    hello world
                </div>
                <button 
                onClick={ () => setShowModal(false)}>
                    hide
                </button>

            </Modal>
        </div>
    )
}

export default AddNewBook