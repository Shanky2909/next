'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

export const homePageSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = homePageSlice.actions;
export default homePageSlice.reducer;
