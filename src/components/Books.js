import React, { useContext } from 'react'
import Book from './Book'
import Next7Days from './Next7Days'
import { BookContext } from '../context'

function Books() {
    const { selectedCategory } = useContext(BookContext)

    const books = [
        {
            id: 'd54sd4',
            text: "Go for a run",
            author: "Balzac",
            time: "10:00 AM",
            date: "06/03/2021",
            day: "6",
            checked: true,
            color: '#000000',
            category: 'personal'
        },
        {
            id: 'd54fdf',
            text: "Meeting",
            author: "Yo Mama",
            time: "09:00 AM",
            date: "08/03/2021",
            day: "1",
            checked: false,
            color: '#00ff00',
            category: 'work'
        }
    ]
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