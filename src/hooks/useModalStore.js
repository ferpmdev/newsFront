import { useDispatch, useSelector } from 'react-redux'
import { onNewsOpenModal, onEditCloseModal, onEditOpenModal, onNewsCloseModal } from '../store'

export const useModalStore = () => {

    const dispatch = useDispatch()

    const { isNewsModalOpen, isEditModalOpen } = useSelector(state => state.modal)

    const openNewsModal = () => {
        dispatch(onNewsOpenModal())
    }

    const closeNewsModal = () => {
        dispatch(onNewsCloseModal())
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
        isNewsModalOpen,
        //* Metodos
        openEditModal,
        closeEditModal,
        openNewsModal,
        closeNewsModal

    }
}