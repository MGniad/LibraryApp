import React from 'react'
import Book from './Book'
import Next7Days from './Next7Days'

function Books() {
    const selectedCategory = "Today"

    const books = [
        {
            id: 'd54sd4',
            text: "Go for a run",
            time: "10:00 AM",
            date: "06/03/2021",
            day: "6",
            checked: false,
            color: '#000000',
            project: 'personal'
        },
        {
            id: 'd54fdf',
            text: "Meeting",
            time: "09:00 AM",
            date: "08/03/2021",
            day: "1",
            checked: true,
            color: '#00ff00',
            project: 'work'
        }
    ]
    return (
        <div className='Books'>
            <div className="selected-category">
                {selectedCategory}
            </div>
            <div className="books">
                {
                    selectedCategory === "Next 7 days" ?
                        <Next7Days books={books} />
                        :
                        books.map(book =>
                            <Book book={book} key={book.key} />
                        )
                }
            </div>
        </div>
    )
}

export default Books