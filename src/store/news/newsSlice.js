import { createSlice } from '@reduxjs/toolkit'
import { fakeData } from '../../fakeData/fakedata'


const initialState = {
    notes: fakeData,
    isSaving: true,
    messageSave: '',
    posted: null,
}

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        getNews: (state) => {
            state.notes
        },
        // createNote: (state, action) => {

        // },
        // postNote: (state, action) => {

        // },
        // updateNote:  (state, action) => {

        // },
        // deleteNoteById:  (state, action) => {

        // },

    },
})

export const { 
    getNews, 
    // createNote, 
    // postNote, 
    // updateNote, 
    // deleteNoteById 
} = newsSlice.actions