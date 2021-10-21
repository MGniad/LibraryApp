import React from 'react'
import { Pencil, X, XCircle } from 'react-bootstrap-icons'
import Categories from './Categories'
import RenameCategory from './RenameCategory'

function Category({ category, edit }) {

    return (
        <div className='Category'>
            <div className="Project">
                <div className="name">
                    {category.name}
                </div>
                <div className="btns">
                    {edit ?
                        <div className="edit-delete">
                            <span className="edit">
                                <Pencil size="13" />
                            </span>
                            <span className="delete">
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


        </div>
    )
}

export default Category