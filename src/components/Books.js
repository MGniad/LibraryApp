import React, { useContext, useState } from 'react'
import Book from './Book'
import Last7Days from './Last7Days'
import { BookContext } from '../context'


function Books() {
    
    const[ searchWord, setSearchWord] = useState('')
    const { books, selectedCategory } = useContext(BookContext)

   const searchFilter = books.filter( book => {
       return book.text.toLowerCase().includes(searchWord.toLocaleLowerCase())
   })

    return (
        
        <div className='Books'>
           
           <input 
           type="text"
           placeholder = "search..."
           onChange ={e => setSearchWord(e.target.value)}
           />
            
            <div className="selected-category">
                {selectedCategory}
            </div>
            <div className="books">
                {
                    selectedCategory === "last 7 days" ?
                        <Last7Days books={books} />
                        :
                        searchFilter
                        .map(book =>
                            <Book book={book} key={book.id} />
                        )
                }
            </div>
        </div>
    )
}

export default Books