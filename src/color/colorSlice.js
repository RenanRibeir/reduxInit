import {createSlice} from '@reduxjs/toolkit';

export const colorSlice = createSlice({
  name: 'color',
  initialState: {
    value: '#E4CDFF',
  },
  reducers: {
    paleLavender: state => {
      state.value = '#E4CDFF';
    },
    lightPastel: state => {
      state.value = '#B19CD9';
    },
    rhythm: state => {
      state.value = '#816EA7';
    },
    cyberGrape: state => {
      state.value = '#534278';
    },
  },
});

// Action creators are generated for each case reducer function
export const {paleLavender, lightPastel, rhythm, cyberGrape} =
  colorSlice.actions;

export default colorSlice.reducer;
