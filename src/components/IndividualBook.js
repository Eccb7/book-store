import React from 'react';
import PropTypes from 'prop-types';

const IndividualBook = ({ book, onDelete }) => (
  <div>
    <h3>{book.title}</h3>
    <p>
      Author:
      {' '}
      {book.author}
    </p>
    <button type="button" onClick={onDelete}>Delete</button>
  </div>
);

IndividualBook.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default IndividualBook;
