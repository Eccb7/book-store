import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import ButtonGroup from '@mui/material/Button';
import { Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
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
    <div className="book-list">
      {books.map((book) => (
        <div key={book.itemId || uuidv4()} className="book-details">
          <div className="book-info">
            <p className="School-of Text-Style-9">
              {book.category}
            </p>
            <h3 className="Title1 Text-Style-5">{book.title}</h3>
            <div className="author-buttons">
              <p className="Suzanne-Collins Text-Style-8">
                {book.author}
              </p>
              <ButtonGroup variant="text" aria-label="text button group">
                <Button type="submit">Comments</Button>
                <Button type="submit" onClick={() => handleRemoveBook(book.itemId)}>Remove</Button>
                <Button type="submit">Edit</Button>
              </ButtonGroup>
            </div>
          </div>
          <div className="progress">
            <CircularProgress variant="determinate" value={75} />
            <p>
              75%
              <br />
              <span className="Completed Text-Style-2">
                Completed
              </span>
            </p>
          </div>
          <div>
            <p className="Current-Chapter Text-Style-7">CURRENT CHAPTER</p>
            <p className="Current-Lesson Text-Style-4">Chapter 17</p>
            <Button className="Rectangle-2" variant="contained" type="submit">UPDATE PROGRESS</Button>
          </div>
        </div>
      ))}
    </div>
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
