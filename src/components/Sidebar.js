import React, { useContext, useEffect, useRef } from 'react'
import { BookContext } from '../context'

function Sidebar({ children }){

    const {setSelectedBook} = useContext(BookContext)
    const sidebarRef = useRef()

useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => document.removeEventListener('click', handleClick)
})

const handleClick = e => {
    if(e.target == sidebarRef.current || sidebarRef.current.contains(e.target)){
        setSelectedBook(undefined)
    }
}

return (
        <div className='Sidebar'
        ref={sidebarRef}
        >
            {children}
        </div>
    )
}

export default Sidebar