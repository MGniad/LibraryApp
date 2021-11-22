import React, { useContext } from 'react'
import { Book, CaretUp } from 'react-bootstrap-icons'
import { calendarItems } from '../constants'
import { BookContext } from '../context'

function Calendar() {
    const { setSelectedCategory } = useContext(BookContext)


    return (
        <div className='Calendar'>
            <div className="header">
                <div className="title">
                    <Book size='18px' />
                    <p>My Books</p>
                </div>
                <div className="btns">
                    <span>
                        <CaretUp size='20px' />
                    </span>
                </div>
            </div>
            <div className="items">
                {

                    calendarItems.map(item =>
                        <div className="item"
                            key={item}
                            onClick={() => setSelectedCategory(item)}
                        >
                            {item}
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default Calendar