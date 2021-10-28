import React, { useContext, useState } from 'react'
import { CaretUp, Journal, Journals, Palette, PencilFill } from 'react-bootstrap-icons';
import { BookContext } from '../context';
import AddNewCategory from './AddNewCategory'
import Category from './Category'

function Categories() {
    const [showMenu, setShowMenu] = useState(true);
    const [edit, setEdit] = useState(false);
    const pencilColor = edit ? "#1ec94c" : "#000000"

    const { categories } = useContext(BookContext)


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