import React, { createContext, useState } from "react";
import { useBooks, useCategories } from "../hooks"

const BookContext = createContext()

function BookContextProvider({ children }) {
    const defaultCategory = 'today'
    const [selectedCategory, setSelectedCategory] = useState(defaultCategory)

    const books = useBooks()

    const categories = useCategories(books)

    return (
        <BookContext.Provider
            value={
                {
                    selectedCategory,
                    setSelectedCategory,

                    books,
                    categories,
                }
            }
        >
            {children}
        </BookContext.Provider>

    )
}

export { BookContextProvider, BookContext }