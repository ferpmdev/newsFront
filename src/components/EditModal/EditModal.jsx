import Modal from 'react-modal';
import { useModalStore } from '../../hooks/useModalStore';
import { useSelector } from 'react-redux';

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
                <h1> Editar esta nota</h1>
                <hr />

                <form className="container">

                    <hr />
                    <div className="form-group mb-2">
                        <label>Titulo</label>
                        <input
                            type="text"
                            className=''
                            placeholder="Título del evento"
                            name="title"
                            autoComplete="off"
                        // value={notes.title}
                        // onChange={onInputChanged}
                        />
                        <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                    </div>

                    <div className="form-group mb-2">
                        <textarea
                            type="text"
                            className="form-control"
                            placeholder="Sumario"
                            rows="5"
                            name="summary"
                        // value={notes.summary}
                        // onChange={onInputChanged}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-outline-primary btn-block"
                        onClick={onCloseModal}
                    >
                        <i className="far fa-save"></i>
                        <span> Crear </span>
                    </button>

                </form>

            </Modal>
        </>
    )
}