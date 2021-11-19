import React, { useContext, useState } from 'react'
import { Pencil, X, XCircle } from 'react-bootstrap-icons'
import Categories from './Categories'
import Modal from './Modal'
import RenameCategory from './RenameCategory'
import { BookContext } from '../context'
import firebase from '../firebase'

function Category({ category, edit }) {
    const { defaultCategory, selectedCategory, setSelectedCategory } = useContext(BookContext)

    const [showModal, setShowModal] = useState(false)

    const deleteCategory = category => {
        firebase
            .firestore()
            .collection('categories')
            .doc(category.id)
            .delete()
            .then(() => {
                firebase
                    .firestore()
                    .collection('books')
                    .where('categoryName', '==', category.name)
                    .get()
                    .then((querySnapshot) => {
                        querySnapshot.forEach(doc => {
                            doc.ref.delete()
                        })
                    })
            })
            .then(() => {
                if (selectedCategory === category.name) {
                    setSelectedCategory(defaultCategory)
                }
            })
    }
    return (
        <div className='Category'>
            <div className="Project">
                <div
                    className="name"
                    onClick={() => setSelectedCategory(category.name)}
                >
                    {category.name}
                </div>
                <div className="btns">
                    {edit ?
                        <div className="edit-delete">
                            <span
                                className="edit"
                                onClick={() => setShowModal(true)}
                            >
                                <Pencil size="13" />
                            </span>
                            <span className="delete"
                                onClick={() => deleteCategory(category)}>
                                <XCircle size="13" />
                            </span>
                        </div>
                        :
                        category.numOfBooks === 0 ?
                            ""
                            :
                            <div className="total-books">
                                {category.numOfBooks}
                            </div>
                    }
                </div>
            </div>

            <Modal showModal={showModal}>
                <RenameCategory category={category} setShowModal={setShowModal} />
            </Modal>
        </div>

    )
}

export default Category