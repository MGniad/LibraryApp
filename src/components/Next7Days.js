import moment from 'moment'
import React, { useEffect, useState } from 'react'
import Book from './Book'

function Next7Days({ books }) {
    const [weekBooks, setWeekBooks] = useState([])

    useEffect(() => {
        const days = ['0', '1', '2', '3', '4', '5', '6']

        const sortedBooksByDay = days.map(day => {

            return {
                books: books.filter(book => book.day === day),
                number: day
            }
        }
        )
        const today = parseInt(moment().format('d'))
        const arrangeDays = sortedBooksByDay.slice(today).concat(sortedBooksByDay.slice(0, today))

        setWeekBooks(arrangeDays)
    }, [books])

    return (
        <div className='Next7Days'>
            {
                weekBooks.map(day =>
                    <div key={day.number}>
                        <div className="day">
                            <div className="name">
                                {moment(day.number, 'd').format('dddd')}
                                {day.number === moment().format('d') && '(Today'}
                            </div>
                            <div className="total-books">
                                {day.books.lenght}
                            </div>
                        </div>
                        <div className="books">
                            {
                                day.books.map(book =>
                                    <Book key={book.id} book={book} />
                                )
                            }
                        </div>
                    </div>)


            }
        </div>
    )
}

export default Next7Days