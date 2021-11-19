import React, { useState } from 'react'
import Modal from './Modal'
import { Bell, CalendarDay, Clock, Journals, Palette, X } from 'react-bootstrap-icons'
import { DatePicker, TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

function BookForm({
    handleSubmit,
    heading = false,
    text, setText,
    author, setAuthor,
    day, setDay,
    time, setTime,
    bookCategory, setBookCategory,
    categories,
    showButtons = false,
    setShowModal = false
}) {

    
        const handleKeyDown = (event) => {
          if (event.key === 'Enter') {
            console.log('do validate')
          }
        }


    return (

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <form onSubmit={handleSubmit} className="BookForm" onKeyDown={handleKeyDown}>
                <div className="text">
                    {
                        heading &&
                        <h3>{heading}</h3>
                    }
                    <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Title" autoFocus />
                    <input type="text" value={author} onChange={e => setAuthor(e.target.value)} placeholder="Author" />
                </div>
                <div className="pick-day">
                    <div className="title">
                        <CalendarDay />
                    </div>
                    <DatePicker
                        value={day}
                        onChange={day => setDay(day)}
                    disabled
                    />
                </div>
                <div className="pick-time">
                    <div className="title">
                        <Clock />
                    </div>
                    <TimePicker
                        value={time}
                        onChange={time => setTime(time)}
                        disabled
                    />
                </div>
                <div className="pick-category">
                    <div className="title">
                        <Journals />
                        <p>Choose a category</p>
                    </div>

                    <div className="categories">
                        {

                            categories.length > 0 ?
                                categories.map(category =>
                                    <div
                                        className={`category ${bookCategory === category.name ? "active" : ""}`}
                                        onClick={() => setBookCategory(category.name)}
                                        key={category.id}>
                                        {category.name}
                                    </div>
                                )
                                :
                                <div style={{ color: '#ff0000' }}>
                                    Please add a category before proceeding
                                </div>



                        }

                    </div>
                </div>
                {
                    showButtons &&
                    <div>
                        <div className="cancel" onClick={() => setShowModal(false)} >
                            <X size='40' />
                        </div>
                        <div className="confirm">
                            <button 
                            
                            >
                                + Add book
                            </button>
                        </div>
                    </div>

                }
            </form>
        </MuiPickersUtilsProvider>


    )
}


export default BookForm