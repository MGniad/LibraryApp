import React, { useContext, useEffect, useState } from 'react'
import Modal from './Modal'
import BookForm from './BookForm'
import { BookContext } from '../context'
import { calendarItems } from '../constants'
import firebase from '../firebase'
import moment from 'moment'
import randomColor from 'randomcolor'

function AddNewBook() {
    const { categories, selectedCategory } = useContext(BookContext)

    const [showModal, setShowModal] = useState(false)
    const [text, setText] = useState('')
    const [author, setAuthor] = useState('')
    const [day, setDay] = useState(new Date())
    const [time, setTime] = useState(new Date())
    const [bookCategory, setBookCategory] = useState(selectedCategory)





    function handleSubmit(e) {
        e.preventDefault()

        if (text && !calendarItems.includes(bookCategory)) {

            firebase
                .firestore()
                .collection('books')
                .add(
                    {
                        text: text,
                        author: author,
                        date: moment(day).format('DD/MM/YYYY'),
                        day: moment(day).format('d'),
                        time: moment(time).format('hh:MM A'),
                        checked: false,
                        color: randomColor(),
                        categoryName: bookCategory
                    }
                )

            setShowModal(false)
            setText('')
            setAuthor('')
            setDay(new Date())
            setTime(new Date())
        }
    }

    useEffect(() => {
        setBookCategory(selectedCategory)
    }, [selectedCategory])
    return (
        <div className='AddNewBook'>
            <div className="btn">
                <button onClick={() => setShowModal(true)} >
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