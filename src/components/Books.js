import React, { useContext, useState } from 'react'
import Book from './Book'
import Last7Days from './Last7Days'
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
                    selectedCategory === "last 7 days" ?
                        <Last7Days books={books} />
                        :
                        books
                        .map(book =>
                            <Book book={book} key={book.id} />
                        )
                }
            </div>
        </div>
    )
}

export default Books