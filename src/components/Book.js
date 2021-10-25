import React from 'react'

function Book({ book }) {
    return (
        <div className='Book'>
            {book.text}
        </div>
    )
}

export default Book