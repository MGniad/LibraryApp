import React, { useContext, useState } from 'react'
import { ArrowClockwise, CheckCircleFill, Circle, Trash } from 'react-bootstrap-icons'
import firebase from '../firebase'
import moment from 'moment'
import { BookContext } from '../context'

function Book({ book }) {
    const [hover, setHover] = useState(false)

const {selectedBook, setSelectedBook} = useContext(BookContext)

const handleDelete = book =>{ 
    
    deleteBook(book)
    
    if(selectedBook === book){
        setSelectedBook(undefined)
    }
}

const deleteBook = book => {
        firebase
            .firestore()
            .collection('books')
            .doc(book.id)
            .delete()
    }

    const checkBook = book => {
        firebase
            .firestore()
            .collection('books')
            .doc(book.id)
            .update({
                checked: !book.checked
            })

    }

const repeatNextDay = book => {
    const nextDayDate = moment(book.date, 'DD/MM/YYYY').add(1, 'days')

    const repeatedBook = {
        ...book,
        checked : false,
        date : nextDayDate.format('DD/MM/YYYY'),
        day : nextDayDate.format('d'),
    }

    delete repeatedBook.id

    firebase
    .firestore()
    .collection('books')
    .add(repeatedBook)
}

    return (
        <div className='Book'>
            <div className="book-container"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}>
                <div className="check-book"
                    onClick={() => checkBook(book)}>
                    {
                        book.checked ?
                            <span className="checked">
                                <CheckCircleFill color="#bebebe" />
                            </span>
                            :
                            <span className="unchecked">
                                <Circle color={book.color} />

                            </span>
                    }
                </div>
                <div className="text"
                onClick = {() => setSelectedBook(book)}
                >
                    <p style={{ color: book.checked ? '#bebebe' : '#000000' }}>{book.text} <br/>by: {book.author}</p>
                    <span>{book.time} - {book.categoryName}</span>
                    <div className={`line ${book.checked ? 'line-trough' : ''}`}></div>

                </div>
                {/* <div className="add-to-next-day"
                onClick={ () => repeatNextDay(book)}>
                    {
                        book.checked &&
                        <span>
                            <ArrowClockwise />
                        </span>
                    }
                </div> */}
                <div className="delete-book"
                    onClick={() => handleDelete(book)}>
                    {
                        (hover || book.checked) &&
                        <Trash />
                    }
                </div>
            </div>
        </div>
    )
}

export default Book