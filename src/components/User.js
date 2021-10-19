import React from 'react'
import logo from '../img/user.png'
function User(){
    
    return (
        <div className='User'>
            <div className="logo">
                <img src={logo} alt="logo" />
                <div className="info">
                    <p>Marek</p>
                    <a href="#">Logout!</a>
                </div>
            </div>
        </div>
    )
}

export default User