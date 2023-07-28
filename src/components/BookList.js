import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const BookList = ({ books }) => {
  const dispatch = useDispatch();

  if (!Array.isArray(books) || books.length === 0) {
    return <p>No books available</p>;
  }

  const handleRemoveBook = (itemId) => {
    dispatch(removeBook(itemId));
  };

  return (
    <ul>
      {books.map((book) => (
        <li key={book.itemId}>
          <h3>{book.title}</h3>
          <p>
            Author:
            {' '}
            {book.author}
          </p>
          <p>
            Category:
            {' '}
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
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BookList;
