import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    // Under construction reducer
    underConstruction: (state) => {
      state.categories = ['Under construction'];
    },
  },
});

export const { underConstruction } = categoriesSlice.actions;
export default categoriesSlice.reducer;
