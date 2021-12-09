import React, { useContext, useEffect, useState } from "react";
import BookForm from "./BookForm";
import { BookContext } from "../context";
import moment from "moment";
import firebase from "../firebase";
import Modal from "./Modal";

function EditBooks() {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [day, setDay] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [bookCategory, setBookCategory] = useState("");
  const [showModal, setShowModal] = useState(false);

  const { selectedBook, categories } = useContext(BookContext);

  useEffect(() => {
    if (selectedBook) {
      setText(selectedBook.text);
      setAuthor(selectedBook.author);
      setBookCategory(selectedBook.categoryName);
    }
  }, [selectedBook]);

  useEffect(() => {
    if (selectedBook) {
      firebase.firestore().collection("books").doc(selectedBook.id).update({
        text,
        author,
        categoryName: bookCategory,
      });
    }
  }, [text, author, bookCategory]);

  function handleSubmit(e) {}

  return (
    <div>
      {selectedBook && (
        <div className="EditBooks">
          <div className="header">EditBooks</div>
          <div className="container">
            <BookForm
              handleSubmit={handleSubmit}
              text={text}
              setText={setText}
              author={author}
              setAuthor={setAuthor}
              bookCategory={bookCategory}
              setBookCategory={setBookCategory}
              categories={categories}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default EditBooks;
