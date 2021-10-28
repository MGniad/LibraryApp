import React, { useContext } from 'react'
import Book from './Book'
import Next7Days from './Next7Days'
import { BookContext } from '../context'

function Books() {
    const { books, selectedCategory } = useContext(BookContext)


    return (
        <div className='Books'>
            <div className="selected-category">
                {selectedCategory}
            </div>
            <div className="books">
                {
                    selectedCategory === "next 7 days" ?
                        <Next7Days books={books} />
                        :
                        books.map(book =>
                            <Book book={book} key={book.id} />
                        )
                }
            </div>
        </div>
    )
}

export default Books