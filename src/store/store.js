import { configureStore } from '@reduxjs/toolkit'
import { newsSlice } from './news/newsSlice/'
import { modalSlice } from './modal/modalSlice'
import { counterSlice } from './counter/counterSlice'


export const store = configureStore({
  reducer: {
    news: newsSlice.reducer,
    modal: modalSlice.reducer,
    counter: counterSlice.reducer
  },
})