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
        getOne: (state) => {
            state.news[0]
        },
        createNote: (state, action) => {

        },
        postNote: (state, action) => {

        },
        updateNote:  (state, action) => {

        },
        deleteNoteById:  (state, action) => {

        },

    },
})

export const { getOne, createNote, postNote, updateNote, deleteNoteById } = newsSlice.actions