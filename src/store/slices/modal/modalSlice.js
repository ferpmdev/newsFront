import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isCreateModalOpen: false,
    isEditModalOpen: false,

}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {

        onCreateOpenModal: (state ) => {
            state.isCreateModalOpen = true;
        },
        onCreateCloseModal: (state) => {
            state.isCreateModalOpen = false;
        },

        onEditOpenModal: (state ) => {
            state.isEditModalOpen = true;
        },
        onEditCloseModal: (state) => {
            state.isEditModalOpen = false;
        }
    },
})

export const { onCreateOpenModal, onCreateCloseModal, onEditOpenModal, onEditCloseModal } = modalSlice.actions