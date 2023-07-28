import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/IZNkftyoggJ9iSTy3VI3/books';

const initialState = {
  books: [],
  isLoading: false,
  error: null,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch books');
  }
});

export const addBook = createAsyncThunk('books/addBook', async (newBookData) => {
  try {
    const newBook = {
      item_id: uuidv4(),
      ...newBookData,
    };

    await axios.post(baseURL, newBook);
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    console.error('Error posting book:', error);
    throw error;
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (itemId, { rejectWithValue }) => {
  try {
    await axios.delete(`${baseURL}/${itemId}`);
    return itemId;
  } catch (error) {
    return rejectWithValue('Error removing book');
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        const booksData = action.payload;
        const booksArray = Object.keys(booksData).map((itemId) => ({
          itemId,
          ...booksData[itemId][0],
        }));

        state.books = booksArray;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Failed to fetch books from the API.';
      })
      .addCase(addBook.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.books.push(action.payload);
        state.isLoading = false;
      })
      .addCase(addBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(removeBook.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.books = state.books.filter((book) => book.itemId !== action.payload);
        state.isLoading = false;
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default booksSlice.reducer;
