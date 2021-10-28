import { onSnapshot } from "firebase/firestore";
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