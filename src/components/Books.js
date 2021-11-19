import React, { useContext, useState } from 'react'
import Book from './Book'
import Last7Days from './Last7Days'
import { BookContext } from '../context'


function Books() {
    
<<<<<<< HEAD
    const[ searchWord, setSearchWord] = useState('')
    const { books, selectedCategory } = useContext(BookContext)

   const searchFilter = books.filter( book => {
       return book.text.toLowerCase().includes(searchWord.toLocaleLowerCase())
   })
=======

    const { books, selectedCategory } = useContext(BookContext)

   
>>>>>>> 2f68e1271d72844cc8df8a13014f001afe3b46ea

    return (
        
        <div className='Books'>
           
<<<<<<< HEAD
           <input 
           type="text"
           placeholder = "search..."
           onChange ={e => setSearchWord(e.target.value)}
           />
=======
>>>>>>> 2f68e1271d72844cc8df8a13014f001afe3b46ea
            
            <div className="selected-category">
                {selectedCategory}
            </div>
            <div className="books">
                {
                    selectedCategory === "last 7 days" ?
                        <Last7Days books={books} />
                        :
<<<<<<< HEAD
                        searchFilter
=======
                        books
>>>>>>> 2f68e1271d72844cc8df8a13014f001afe3b46ea
                        .map(book =>
                            <Book book={book} key={book.id} />
                        )
                }
            </div>
        </div>
    )
}

export default Books