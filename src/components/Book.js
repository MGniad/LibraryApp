import React, { useState } from 'react'
import { ArrowClockwise, CheckCircleFill, Circle, Trash } from 'react-bootstrap-icons'

function Book({ book }) {
    const [hover, setHover] = useState(false)
    return (
        <div className='Book'>
            <div className="book-container"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}>
                <div className="check-book">
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
                <div className="text">
                    <p style={{ color: book.checked ? '#bebebe' : '#000000' }}>{book.text} by: {book.author}</p>
                    <span>{book.time} - {book.category}</span>
                    <div className={`line ${book.checked ? 'line-trough' : ''}`}></div>

                </div>
                <div className="add-to-next-day">
                    {
                        book.checked &&
                        <span>
                            <ArrowClockwise />
                        </span>
                    }
                </div>
                <div className="delete-book">
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