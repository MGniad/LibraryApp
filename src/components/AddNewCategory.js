import React, { useState } from 'react'
import Modal from './Modal'
import { Plus } from 'react-bootstrap-icons'
import CategoryForm from './CategoryForm'
import firebase from '../firebase'

function AddNewCategory() {
    const [showModal, setShowModal] = useState(false)
    const [categoryName, setCategoryName] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        if (categoryName) {
            const categoriesRef = firebase.firestore().collection('categories')

            categoriesRef
                .where('name', '==', categoryName)
                .get(querySnapshot => {
                    if (querySnapshot.empty) {
                        categoriesRef
                            .add({
                                name: categoryName
                            }
                            )
                    } else {
                        alert('Category already exist')
                    }
                })

            setShowModal(false)
            setCategoryName('')
        }

    }

    return (
        <div className='AddNewCategory'>
            <div className="add-button">
                <span onClick={() => setShowModal(true)}>
                    <Plus size="20" />

                </span>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <CategoryForm
                    handleSubmit={handleSubmit}
                    heading='New Category'
                    value={categoryName}
                    setValue={setCategoryName}
                    setShowModal={setShowModal}
                    confirmButtonText='+ Add Category' />
            </Modal>
        </div>
    )
}

export default AddNewCategory