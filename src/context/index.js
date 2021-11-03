import React, { createContext, useState } from "react";
import { useBooks, useCategories, useCategoriesWithStats, useFilterBooks } from "../hooks"

const BookContext = createContext()

function BookContextProvider({ children }) {
    const defaultCategory = 'today'
    const [selectedCategory, setSelectedCategory] = useState(defaultCategory)

    const books = useBooks()

    const categories = useCategories()

    const categoriesWithStats = useCategoriesWithStats(categories, books)

    const filteredBooks = useFilterBooks(books, selectedCategory)

    return (
        <BookContext.Provider
            value={
                {
                    defaultCategory,
                    selectedCategory,
                    setSelectedCategory,

                    books: filteredBooks,
                    categories: categoriesWithStats,
                }
            }
        >
            {children}
        </BookContext.Provider>

    )
}

export { BookContextProvider, BookContext }