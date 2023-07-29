import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { addBook } from '../redux/books/booksSlice';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      // Handle the error (e.g., display an error message to the user)
    }
  };

  const styles = {
    form: {
      display: 'flex',
      justifyContent: 'space-between', // Add space between the elements
      alignItems: 'center', // Center elements vertically
      width: '80%', // Increased width to accommodate the horizontal layout
      marginLeft: '10%',
    },
    input: {
      flex: '1', // Expand the input to take available space
      width: '25%', // Set fixed width to 25%
      padding: '5px',
      margin: '5px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '16px',
    },
    select: {
      flex: '1', // Expand the select dropdown to take available space
      width: '25%', // Set fixed width to 25%
      padding: '5px',
      margin: '5px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '16px',
    },
    button: {
      flex: '1', // Expand the button to take available space
      width: '25%', // Set fixed width to 25%
      padding: '12px',
      margin: '16px',
    },
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
        style={styles.input}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
        style={styles.select}
      >
        <option value="">Select a category</option>
        <option value="Fiction">Fiction</option>
        <option value="Non-Fiction">Non-Fiction</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Mystery">Mystery</option>
      </select>

      <Button type="submit" variant="contained" style={styles.button}>
        Add Book
      </Button>
    </form>
  );
};

export default BookForm;
