import { configureStore } from '@reduxjs/toolkit'
import { articleSlice } from './article/articleSlice'
import { modalSlice } from './modal/modalSlice'


export const store = configureStore({
  reducer: {
    article: articleSlice.reducer,
    modal: modalSlice.reducer,
  },
})