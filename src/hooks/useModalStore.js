import { useDispatch, useSelector } from 'react-redux'
import { onCreateOpenModal, onEditCloseModal, onEditOpenModal, onCreateCloseModal } from '../store'

export const useModalStore = () => {

    const dispatch = useDispatch()

    const { isCreateModalOpen, isEditModalOpen } = useSelector(state => state.modal)

    const openCreateModal = () => {
        dispatch(onCreateOpenModal())
    }

    const closeCreateModal = () => {
        dispatch(onCreateCloseModal())
    }

    const openEditModal = () => {
        dispatch(onEditOpenModal())
    }

    const closeEditModal = () => {
        dispatch(onEditCloseModal())
    }

    return {

        //* Propiedades
        isEditModalOpen,
        isCreateModalOpen,
        //* Metodos
        openEditModal,
        closeEditModal,
        openCreateModal,
        closeCreateModal

    }
}