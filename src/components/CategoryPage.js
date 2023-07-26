import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/books/booksSlice';
import BookList from './BookList';
import BookForm from './BookForm';
import { underConstruction } from '../redux/categories/categoriesSlice';

const CategoryPage = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleAddBook = (newBook) => {
    // Generate a unique id for the new book
    const newId = `item${books.length + 1}`;
    // Add the id property to the new book object
    const bookWithId = { ...newBook, id: newId };
    // Dispatch the addBook action with the new book object
    dispatch(addBook(bookWithId));
  };

  const handleDeleteBook = (bookId) => {
    dispatch(removeBook(bookId));
  };

  const handleCategoryClick = () => {
    dispatch(underConstruction());
  };

  return (
    <div>
      <div>
        <h2>Categories</h2>
        <button type="button" onClick={() => handleCategoryClick('Fiction')}>
          Fiction
        </button>
        <button type="button" onClick={() => handleCategoryClick('Nonfiction')}>
          Nonfiction
        </button>
      </div>
      <BookList books={books} onDelete={handleDeleteBook} />
      <BookForm onAdd={handleAddBook} />
    </div>
  );
};

export default CategoryPage;
