import Modal from 'react-modal';
import { useModalStore } from '../../hooks/useModalStore';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import './createModal.css'


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

export const CreateModal = () => {

    const { isCreateModalOpen, closeCreateModal } = useModalStore()
    const { notes } = useSelector((state) => state.news)


    const onCloseModal = () => {
        closeCreateModal()
    }

    const onInputChanged = ({ target }) => {

    }

    const onSubmit = async (event) => {
        //     event.preventDefault();
        //     setFormSubmitted(true);

        //     const difference = differenceInSeconds( formValues.end, formValues.start );

        //     if ( isNaN( difference ) || difference <= 0 ) {
        //         Swal.fire('Fechas incorrectas','Revisar las fechas ingresadas','error');
        //         return;
        //     }

        //     if ( formValues.title.length <= 0 ) return;

        //     // TODO: 
        //     await startSavingEvent( formValues );
        closeDateModal();
        //     setFormSubmitted(false);
    }


    return (
        <>
            <Modal
                isOpen={isCreateModalOpen}
                onRequestClose={onCloseModal}
                style={customStyles}
                className="modal"
                overlayClassName="modal-fondo"
                closeTimeoutMS={200}
            >
                <h1 className='h1cm'> Crea una nota nueva</h1>

                <hr />
                <form className="pcm">

                    <input
                        type="text"
                        className='icm'
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value={notes.title}
                        onChange={onInputChanged}
                    />

                    <input
                        type="text"
                        className='icm'
                        placeholder="Link de la imagen"
                        name="image"
                        autoComplete="off"
                        value={notes.image}
                        onChange={onInputChanged}
                    />


                    <textarea
                        type="text"
                        className="icm"
                        placeholder="Sumario"
                        rows="5"
                        name="summary"
                        value={notes.summary}
                        onChange={onInputChanged}
                    ></textarea>

                    <button
                        type="submit"
                        className="icm"
                    >
                        <i className="far fa-save"></i>
                        <span> Guardar</span>
                    </button>

                </form>
            </Modal>
        </>
    )
}