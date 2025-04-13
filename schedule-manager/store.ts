import { configureStore, createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

const currentDate = createSlice({
  name: 'currentDate',
  initialState: {
    year: Number(moment().format('YYYY')),
    month: Number(moment().format('MM')),
    date: Number(moment().format('DD')),
  },
  reducers: {
    setCurrentDate: (state, action) => {
      const { year, month, date } = action.payload;
      state.year = year;
      state.month = month;
      state.date = date;
    },
  },
});

export const { setCurrentDate } = currentDate.actions;

export default configureStore({
  reducer: {
    currentDate: currentDate.reducer,
  },
});
