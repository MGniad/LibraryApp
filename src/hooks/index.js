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
        console.log(todayDateFormated)

        if (selectedCategory === 'today') {
            data = books.filter(book => book.date === todayDateFormated)
            console.log(data)
        } else if (selectedCategory === 'next 7 days') {
            data = books.filter(book => {
                const bookDate = moment(book.date, 'DD/MM/YYYY')
                const todayDate = moment(todayDateFormated, 'DD/MM/YYYY')

                const diffDays = bookDate.diff(todayDate, 'days')

                return diffDays >= 0 && diffDays < 7
            })
            console.log(data)
        } else if (selectedCategory === 'all days') {
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

export function useCategories(books) {
    const [categories, setCategories] = useState([])

    function calculateNumOfBooks(categoryName, books) {
        return books.filter(book => book.categoryName === categoryName).length
    }

    useEffect(() => {
        let unsubscribe = firebase
            .firestore()
            .collection('categories')
            .onSnapshot(snapshot => {
                const data = snapshot.docs.map(doc => {

                    const categoryName = doc.data().name

                    return {
                        id: doc.id,
                        name: categoryName,
                        numOfBooks: calculateNumOfBooks(categoryName, books)
                    }

                })
                setCategories(data)
            })
        return () => { unsubscribe() }
    }, [])

    return categories
}