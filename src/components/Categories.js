import React from 'react'
import AddNewCategory from './AddNewCategory'
import Category from './Category'

function Categories(){
    
    return (
        <div className='Categories'>
            <Category/>
            <AddNewCategory />
        </div>
    )
}

export default Categories