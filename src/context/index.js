import React, { createContext, useState } from "react";

const BookContext = createContext()

function BookContextProvider({ children }) {
    const defaultCategory = 'today'
    const [selectedCategory, setSelectedCategory] = useState(defaultCategory)
    return (
        <BookContext.Provider
            value={
                {
                    selectedCategory,
                    setSelectedCategory
                }
            }
        >
            {children}
        </BookContext.Provider>

    )
}

export { BookContextProvider, BookContext }