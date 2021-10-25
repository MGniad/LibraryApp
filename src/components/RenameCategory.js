import React, { useState } from 'react'
import CategoryForm from './CategoryForm'

function RenameCategory({ category, setShowModal }) {
    const [newCategoryName, setNewCategoryName] = useState(category.name)

    function handleSubmit(e) {

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