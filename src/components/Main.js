import React from 'react'

function Main({ children }){
    
    return (
        
        <div className='Main'>
            <div className="title">
            <p className='bold'>Library</p>
            <p className='skinny'>App</p>
        </div>
            {children}
        </div>
    )
}

export default Main