import {createSlice} from '@reduxjs/toolkit';

export const colorSlice = createSlice({
  name: 'color',
  initialState: {
    value: '#ff0000',
  },
  reducers: {
    red: state => {
      state.value = '#ff0000';
    },
    purple: state => {
      state.value = '#b042ff';
    },
  },
});

// Action creators are generated for each case reducer function
export const {red, purple} = colorSlice.actions;

export default colorSlice.reducer;
