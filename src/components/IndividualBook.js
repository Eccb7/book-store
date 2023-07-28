import React from 'react';
import PropTypes from 'prop-types';

const IndividualBook = ({ book, onDelete }) => {
  const {
    itemId, title, author, category,
  } = book;

  return (
    <div>
      <h3>{title}</h3>
      <p>
        Author:
        {' '}
        {author}
      </p>
      <p>
        Category:
        {' '}
        {category}
      </p>
      <button type="button" onClick={() => onDelete(itemId)}>
        Remove
      </button>
    </div>
  );
};

IndividualBook.propTypes = {
  book: PropTypes.shape({
    itemId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default IndividualBook;
