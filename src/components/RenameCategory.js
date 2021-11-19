import React, { useContext, useState } from 'react'
import CategoryForm from './CategoryForm'
import firebase from '../firebase'
import { BookContext } from '../context'

function RenameCategory({ category, setShowModal }) {
    const [newCategoryName, setNewCategoryName] = useState(category.name)
    const { selectedCategory, setSelectedCategory } = useContext(BookContext)
    const renameCategory = (category, newCategoryName) => {
        const categoryRef = firebase.firestore().collection('categories')
        const bookRef = firebase.firestore().collection('books')
        const { name: oldCategoryName } = category

        categoryRef
            .where('name', '==', newCategoryName)
            .get()
            .then(querySnapshot => {
                if (!querySnapshot.empty) {
                    alert('Category already exists!')
                } else {
                    categoryRef
                        .doc(category.id)
                        .update(
                            {
                                name: newCategoryName
                            }
                        )
                        .then(() => {
                            bookRef
                                .where('categoryName', '==', oldCategoryName)
                                .get()
                                .then(querySnapshot => {
                                    querySnapshot.forEach(doc => {
                                        doc.ref.update(
                                            {
                                                categoryName: newCategoryName
                                            }
                                        )
                                    })
                                })
                                .then(() => {
                                    if (selectedCategory === oldCategoryName) {
                                        setSelectedCategory(newCategoryName)
                                    }
                                })
                        })
                }
            })
    }

    function handleSubmit(e) {
        e.preventDefault()

        renameCategory(category, newCategoryName)

        setShowModal(false)

    }

    return (
        <div className='RenameCategory'>


            <CategoryForm
                handleSubmit={handleSubmit}
                heading='New Category'
                value={newCategoryName}
                setValue={setNewCategoryName}
                setShowModal={setShowModal}
                confirmButtonText='Confirm' />

        </div>
    )
}

export default RenameCategory