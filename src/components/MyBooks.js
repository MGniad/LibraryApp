import React, { useContext } from 'react'
import { Book, CaretUp } from 'react-bootstrap-icons'
import { booksItems } from '../constants'
import { BookContext } from '../context'

function MyBooks() {
    const { setSelectedCategory } = useContext(BookContext)


    return (
        <div className='MyBooks'>
            <div className="header">
                <div className="title">
                    <Book size='18px' />
                    <p>My Books</p>
                </div>
                <div className="btns">
                    <span>
                        <CaretUp size='20px' />
                    </span>
                </div>
            </div>
            <div className="items">
                {

                    booksItems.map(item =>
                        <div className="item"
                            key={item}
                            onClick={() => setSelectedCategory(item)}
                        >
                            {item}
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default MyBooks