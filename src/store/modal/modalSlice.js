import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isNewsModalOpen: false,
    isEditModalOpen: false,

}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {

        onNewsOpenModal: (state ) => {
            state.isNewsModalOpen = true;
        },
        onNewsCloseModal: (state) => {
            state.isNewsModalOpen = false;
        },

        onEditOpenModal: (state ) => {
            console.log('paso por onEditOpenModal')
            state.isEditModalOpen = true;
        },
        onEditCloseModal: (state) => {
            state.isEditModalOpen = false;
        }
    },
})

export const { onNewsOpenModal, onNewsCloseModal, onEditOpenModal, onEditCloseModal } = modalSlice.actions