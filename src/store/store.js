import { configureStore } from '@reduxjs/toolkit';
import newsSlice from './states/newsStates'

export const store = configureStore({
  reducer: {news: newsSlice},
})
