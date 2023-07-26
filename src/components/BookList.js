import React from 'react';
import PropTypes from 'prop-types';
import IndividualBook from './IndividualBook';

const BookList = ({ books, onDelete }) => (
  <div>
    <h2>Book List</h2>
    {books.map((book) => (
      <IndividualBook key={book.id} book={book} onDelete={() => onDelete(book.id)} />
    ))}
  </div>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookList;
