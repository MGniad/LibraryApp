import React, { useState } from 'react'
import BookForm from './BookForm'

function EditBooks() {

    const [text, setText] = useState()
    const [author, setAuthor] = useState()
    const [day, setDay] = useState()
    const [time, setTime] = useState()
    const [bookCategory, setBookCategory] = useState()

    const categories = [
        { id: 1, name: "crime", numOfBooks: 0 },
        { id: 2, name: "drama", numOfBooks: 1 },
        { id: 3, name: "love", numOfBooks: 2 },
    ]

    function handleSubmit(e) {

    }

    return (
        <div className='EditBooks'>
            <div className="header">EditBooks</div>
            <div className="container">
                <BookForm
                    handleSubmit={handleSubmit}

                    text={text}
                    setText={setText}
                    author={author}
                    setAuthor={setAuthor}
                    day={day}
                    setDay={setDay}
                    time={time}
                    setTime={setTime}
                    bookCategory={bookCategory}
                    setBookCategory={setBookCategory}
                    categories={categories}
                    showButtons={true}

                />
            </div>
        </div>
    )
}

export default EditBooks