import { configureStore } from '@reduxjs/toolkit'
import { articleSlice, modalSlice, authSlice } from './'
// import { articleSlice } from './slices/article/articleSlice'
// import { modalSlice } from './slices/modal/modalSlice'
// import { authSlice } from './slices/auth/authSlice'


export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    article: articleSlice.reducer,
    modal: modalSlice.reducer,
  },
})