import React, { useContext, useEffect, useRef, useState } from 'react'
import { BookContext } from '../context'

function Sidebar({ children }){
    const [isActive, setActive] = useState("false")

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

const toogleVisibility= () =>{
    setActive(!isActive)
}

return (
        <div className={`Sidebar ${!isActive ? 'visible' : '' }`}
        ref={sidebarRef}
        >
            <button className={`showHide ${!isActive ? 'open' : ''}`} onClick={toogleVisibility}/>
            {children}
        </div>
    )
}

export default Sidebar