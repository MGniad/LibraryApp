import React, { useContext, useEffect, useState } from 'react'
import BookForm from './BookForm'
import  {BookContext}  from '../context'
import moment from 'moment'
import firebase from '../firebase'

function EditBooks() {

    const [text, setText] = useState('')
    const [author, setAuthor] = useState('')
    const [day, setDay] = useState(new Date())
    const [time, setTime] = useState(new Date())
    const [bookCategory, setBookCategory] = useState('')

    const { selectedBook, categories } = useContext(BookContext)


    useEffect(() => {
        if(selectedBook){
        setText(selectedBook.text)
        setAuthor(selectedBook.author)
        setDay(moment(selectedBook.date, 'DD/MM/YYYY'))
        setTime(moment(selectedBook.time, 'hh:mm A'))
        setBookCategory(selectedBook.categoryName)
        }
    }, [selectedBook])

    useEffect(() =>{
        if(selectedBook){
        firebase
        .firestore()
        .collection('books')
        .doc(selectedBook.id)
        .update({
            text,
            author,
            date : moment(day).format('DD/MM/YYYY'),
            day : moment(day).format('d'),
            time : moment(time).format('hh:mm A'),
            categoryName : bookCategory
        })
    }},[text, author, time, day, bookCategory])
   
    function handleSubmit(e) {

    }

    return (
        <div>
        {   selectedBook &&
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
                    showButtons={false}

                />
            </div>
        </div>}
        </div>
    )
}

export default EditBooks