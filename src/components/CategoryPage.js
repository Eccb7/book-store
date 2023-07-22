import React, { useState } from 'react';
import BookList from './BookList';
import BookForm from './BookForm';

const CategoryPage = () => {
  const [books, setBooks] = useState([]);

  const handleAddBook = (newBook) => {
    setBooks([...books, { ...newBook, id: books.length + 1 }]);
  };

  const handleDeleteBook = (bookId) => {
    setBooks(books.filter((book) => book.id !== bookId));
  };

  return (
    <div>
      <h2>Category Page</h2>
      <BookList books={books} onDelete={handleDeleteBook} />
      <BookForm onAdd={handleAddBook} />
    </div>
  );
};

export default CategoryPage;
