import React, { useState } from 'react'
import { CaretUp, Journal, Journals, Palette, PencilFill } from 'react-bootstrap-icons';
import AddNewCategory from './AddNewCategory'
import Category from './Category'

function Categories() {
    const [showMenu, setShowMenu] = useState(true);
    const [edit, setEdit] = useState(false);
    const pencilColor = edit ? "#1ec94c" : "#000000"

    const categories = [
        { id: 1, name: "crime", numOfBooks: 0 },
        { id: 2, name: "drama", numOfBooks: 1 },
        { id: 3, name: "love", numOfBooks: 2 },
    ]


    return (
        <div className='Categories'>
            <div className="header">
                <div className="title">
                    <Journals size="18" />
                    <p>Categories</p>
                </div>
                <div className="btns">
                    {
                        showMenu && categories.length > 0 &&
                        <span className="edit" onClick={() => setEdit(edit => !edit)}>
                            <PencilFill size="15" color={pencilColor} />
                        </span>
                    }
                    <AddNewCategory />
                    <span>
                        <CaretUp size="20" />
                    </span>
                </div>
            </div>
            <div className="item">
                {
                    categories.map(category =>
                        <Category
                            category={category}
                            key={category.id}
                            edit={edit}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Categories