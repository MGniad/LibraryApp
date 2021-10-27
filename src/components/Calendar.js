import React, { useContext } from 'react'
import { CalendarDate, CaretUp } from 'react-bootstrap-icons'
import { calendarItems } from '../constants'
import { BookContext } from '../context'

function Calendar() {
    const { setSelectedCategory } = useContext(BookContext)


    return (
        <div className='Calendar'>
            <div className="header">
                <div className="title">
                    <CalendarDate size='18px' />
                    <p>Calendar</p>
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