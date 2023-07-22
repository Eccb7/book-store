import React from 'react';
import PropTypes from 'prop-types';

const IndividualBook = ({ book, onDelete }) => (
  <div>
    <h3>{book.title}</h3>
    <p>
      Author:
      {book.author}
    </p>
    <button type="submit" onClick={() => onDelete(book.id)}>Delete</button>
  </div>
);

IndividualBook.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default IndividualBook;
