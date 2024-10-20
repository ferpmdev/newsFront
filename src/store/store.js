import { configureStore } from '@reduxjs/toolkit'
import { newsSlice } from './news/newsSlice'
import { modalSlice } from './modal/modalSlice'


export const store = configureStore({
  reducer: {
    news: newsSlice.reducer,
    modal: modalSlice.reducer
  },
})