import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, addBook, removeBook } from '../redux/books/booksSlice';
import BookForm from './BookForm';
import BookList from './BookList';

const Home = () => {
  const dispatch = useDispatch();
  const booksFromRedux = useSelector((state) => state.books.books);
  const [localBooks, setLocalBooks] = useState(booksFromRedux);

  useEffect(() => {
    // Fetch books from the API when the component mounts
    dispatch(fetchBooks());
  }, [dispatch]);

  useEffect(() => {
    // Update localBooks state when booksFromRedux changes
    setLocalBooks(booksFromRedux);
  }, [booksFromRedux]);

  const handleAddBook = (newBook) => {
    // Dispatch the addBook action to update the Redux store
    dispatch(addBook(newBook));
  };

  const handleRemoveBook = async (itemId) => {
    // Dispatch the removeBook action to update the Redux store
    await dispatch(removeBook(itemId));
  };

  return (
    <div>
      <BookForm onAdd={handleAddBook} />
      <BookList books={localBooks} onDelete={handleRemoveBook} />
    </div>
  );
};

export default Home;
