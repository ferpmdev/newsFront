import { configureStore } from '@reduxjs/toolkit'
import { articleSlice } from './slices/article/articleSlice'
import { modalSlice } from './slices/modal/modalSlice'


export const store = configureStore({
  reducer: {
    article: articleSlice.reducer,
    modal: modalSlice.reducer,
  },
})