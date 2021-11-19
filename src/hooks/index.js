import { onSnapshot } from "firebase/firestore";
import moment from 'moment';
import { useState, useEffect } from "react";
import firebase from "../firebase";

export function useBooks() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        let unsubscribe = firebase
            .firestore()
            .collection('books')
            .onSnapshot(snapshot => {
                const data = snapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setBooks(data)
            })

        return () => { unsubscribe() }
    }, [])

    return books
}


export function useFilterBooks(books, selectedCategory) {
    const [filteredBooks, setFilteredBooks] = useState([])

    useEffect(() => {
        let data;
        const todayDateFormated = moment().format('DD/MM/YYYY')

        if (selectedCategory === 'read') {
            data = books.filter(book => book.checked === true)
            console.log(data)
        }else if (selectedCategory == 'unread') {
            data = books.filter(book => book.checked === false)
        } else if (selectedCategory === 'last 7 days') {
            data = books.filter(book => {
                const bookDate = moment(book.date, 'DD/MM/YYYY')
                const todayDate = moment(todayDateFormated, 'DD/MM/YYYY')

                const diffDays = bookDate.diff(todayDate, 'days')

                return diffDays <= 0 && diffDays > -7
            })
            console.log(data)
        } else if (selectedCategory === 'all books') {
            data = books
            console.log(data)
        } else {
            data = books.filter(book => book.categoryName === selectedCategory)
            console.log(data)
        }

        setFilteredBooks(data)
    }, [books, selectedCategory])

    return filteredBooks
}

export function useCategories() {
    const [categories, setCategories] = useState([])



    useEffect(() => {
        let unsubscribe = firebase
            .firestore()
            .collection('categories')
            .onSnapshot(snapshot => {
                const data = snapshot.docs.map(doc => {


                    return {
                        id: doc.id,
                        name: doc.data().name

                    }

                })
                setCategories(data)
            })
        return () => { unsubscribe() }
    }, [])

    return categories
}

export function useCategoriesWithStats(categories, books) {
    const [categoriesWithStats, setCategoriesWithStats] = useState([])

    useEffect(() => {
        const data = categories.map((category) => {
            return {
                numOfBooks: books.filter(book => book.categoryName === category.name && !book.checked).length,
                ...category
            }
        })
        setCategoriesWithStats(data)
        console.log(data)
    }, [categories, books])

    return categoriesWithStats
}