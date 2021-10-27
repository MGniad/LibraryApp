import React, { useContext, useEffect, useState } from 'react'
import Modal from './Modal'
import BookForm from './BookForm'
import { BookContext } from '../context'

function AddNewBook() {
    const { selectedCategory } = useContext(BookContext)

    const [showModal, setShowModal] = useState(false)
    const [text, setText] = useState('')
    const [author, setAuthor] = useState('')
    const [day, setDay] = useState(new Date())
    const [time, setTime] = useState(new Date())
    const [bookCategory, setBookCategory] = useState(selectedCategory)



    const categories = [
        { id: 1, name: "crime", numOfBooks: 0 },
        { id: 2, name: "drama", numOfBooks: 1 },
        { id: 3, name: "love", numOfBooks: 2 },
    ]

    function handleSubmit(e) {

    }

    useEffect(() => {
        setBookCategory(selectedCategory)
    }, [selectedCategory])
    return (
        <div className='AddNewBook'>
            <div className="btn">
                <button onClick={() => setShowModal(true)}>
                    + New Book
                </button>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <BookForm
                    handleSubmit={handleSubmit}
                    heading="Add new book"
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
                    setShowModal={setShowModal}
                />

            </Modal>
        </div>
    )
}

export default AddNewBook