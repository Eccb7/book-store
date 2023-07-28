import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { removeBook } from '../redux/books/booksSlice';

const BookList = ({ books }) => {
  const dispatch = useDispatch();

  if (!books || !Array.isArray(books) || books.length === 0) {
    // Handle loading state or empty list
    return <p>Loading...</p>;
  }

  const handleRemoveBook = (itemId) => {
    dispatch(removeBook(itemId));
  };

  return (
    <ul>
      {books.map((book) => (
        <li key={book.itemId || uuidv4()}>
          <h3>{book.title}</h3>
          <p>
            Author:
            {book.author}
          </p>
          <p>
            Category:
            {book.category}
          </p>
          <button type="submit" onClick={() => handleRemoveBook(book.itemId)}>Remove Book</button>
        </li>
      ))}
    </ul>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      itemId: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
      category: PropTypes.string,
      isbn: PropTypes.string,
    }),
  ).isRequired,
};

export default BookList;
