import React, { useState } from 'react'
import Modal from './Modal'
import { Bell, CalendarDay, Clock, Journals, Palette, X } from 'react-bootstrap-icons'
import { DatePicker, TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

function AddNewBook() {
    const [showModal, setShowModal] = useState(false)
    const [text, setText] = useState('')
    const [author, setAuthor] = useState('')
    const [day, setDay] = useState(new Date())
    const [time, setTime] = useState(new Date())


    return (
        <div className='AddNewBook'>
            <div className="btn">
                <button onClick={() => setShowModal(true)}>
                    + New Book
                </button>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <form>
                        <div className="text">
                            <h3>Add new book!</h3>
                            <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Title" autoFocus />
                            <input type="text" value={author} onChange={e => setAuthor(e.target.value)} placeholder="Author" />
                        </div>
                        <div className="remind">
                            <Bell />
                            <p>Remind Me!</p>
                        </div>
                        <div className="pick-day">
                            <div className="title">
                                <CalendarDay />
                            </div>
                            <DatePicker
                                value={day}
                                onChange={day => setDay(day)}
                            />
                        </div>
                        <div className="pick-time">
                            <div className="title">
                                <Clock />
                            </div>
                            <TimePicker
                                value={time}
                                onChange={time => setTime(time)}
                            />
                        </div>
                        <div className="pick-category">
                            <div className="title">
                                <Journals />
                                <p>Choose a category</p>
                            </div>

                            <div className="categories">

                                <div className="category active">
                                    crime
                                </div>
                                <div className="category">
                                    drama
                                </div>

                            </div>
                        </div>
                        <div className="cancel" onClick={() => setShowModal(false)} >
                            <X size='40' />
                        </div>
                        <div className="confirm">
                            <button>
                                + Add book
                            </button>
                        </div>
                    </form>
                </MuiPickersUtilsProvider>
                <button
                    onClick={() => setShowModal(false)}>
                    hide
                </button>

            </Modal>
        </div>
    )
}

export default AddNewBook