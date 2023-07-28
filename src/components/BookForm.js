import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // // Check if the required fields are not empty
    // if (title.trim() === '' || author.trim() === '' || category.trim() === '') {
    //   alert('Please fill in all required fields: title, author, and category.');
    //   return;
    // }

    // Create the new book object with the entered data
    const newBookData = {
      title,
      author,
      category,
    };

    try {
      // Dispatch the addBook action with the new book data
      await dispatch(addBook(newBookData));

      // Clear the form fields after successful submission
      setTitle('');
      setAuthor('');
      setCategory('');
    } catch (error) {
      // console.error('Error posting book:', error);
      // Handle the error (e.g., display an error message to the user)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
