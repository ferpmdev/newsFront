import Modal from 'react-modal';
import { useModalStore } from '../../../hooks/useModalStore';
import { useState } from 'react';
import './createModal.css'
import { useArticleStore } from '../../../hooks/useArticleStore';


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
    const { startSavingArticle } = useArticleStore()

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formValues, setFormValues] = useState({
        title: '',
        summary: '',
        imageUrl: ''
    });

    const onCloseModal = () => {
        closeCreateModal()
    }

    const onInputChanged = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        setFormSubmitted(true);

        if (formValues.title.length <= 0) return;
        if (formValues.summary.length <= 0) return;
        if (formValues.imageUrl.length <= 0) return;

        //     // TODO: 
        await startSavingArticle(formValues);
        closeCreateModal();
        setFormSubmitted(false);
        setFormValues({
            title: '',
            summary: '',
            imageUrl: ''
        })
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
                <form onSubmit={onSubmit} className="pcm">

                    <input
                        type="text"
                        className='icm'
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value={formValues.title}
                        onChange={onInputChanged}
                    />

                    <label className='lcm' >
                        Url de la imagen

                        <input
                            type="text"
                            className='icm'
                            placeholder="Url de la imagen"
                            name="imageUrl"
                            autoComplete="off"
                            value={formValues.imageUrl}
                            onChange={onInputChanged}
                        />
                    </label>

                    <label className='lcm' >
                        Sumario

                        <textarea
                            type="text"
                            className="icm"
                            placeholder="Sumario"
                            rows="5"
                            name="summary"
                            value={formValues.summary}
                            onChange={onInputChanged}
                        ></textarea>
                    </label>

                    <button
                        type="submit"
                        className="btn btn-outline-primary btn-block icm"
                    >
                        <i className="far fa-save"></i>
                        <span> Guardar</span>
                    </button>

                </form>
            </Modal>
        </>
    )
}