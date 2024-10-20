import Modal from 'react-modal';
import { useModalStore } from '../../hooks/useModalStore';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

export const EditModal = () => {
    const { isEditModalOpen, closeEditModal } = useModalStore()


    const onCloseModal = () => {
        closeEditModal()
    }

    return (
        <>
            <Modal
                isOpen={isEditModalOpen}
                onRequestClose={onCloseModal}
                style={customStyles}
                className="modal"
                overlayClassName="modal-fondo"
                closeTimeoutMS={200}
            >
                <h1>editar nota</h1>
{/* 
                <button
                    onClick={closeEditModal}
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> cerrar</span>
                </button> */}
            </Modal>
        </>
    )
}