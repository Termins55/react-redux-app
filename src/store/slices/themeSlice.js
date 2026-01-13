import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLight: true,
};

// initialState, name, reducers
const themeSlice = createSlice({
  initialState,
  name: 'theme',
  reducers: {
    changeTheme: (state, action) => {
      state.isLight = action.payload;
    },
  },
});

const { reducer, actions } = themeSlice;

export const { changeTheme } = actions;

export default reducer;
