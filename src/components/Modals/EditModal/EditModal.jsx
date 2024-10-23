import Modal from 'react-modal';
import { useModalStore } from '../../../hooks/useModalStore';
import { useSelector } from 'react-redux';
import { useArticleStore } from '../../../hooks/useArticleStore';
import { useEffect, useState } from 'react';
import './editModal.css'


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

export const EditModal = ({ handleStartEditArticle }) => {

    const { startSavingArticle, startDeletingArticle } = useArticleStore()
    const { isEditModalOpen, closeEditModal } = useModalStore()
    const { onEditArticle } = useSelector(state => state.article);

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formValues, setFormValues] = useState({
        title: '',
        summary: ''
    });

    useEffect(() => {
        if (onEditArticle !== null) {
            setFormValues({ ...onEditArticle });
        }
    }, [onEditArticle])

    const onCloseModal = () => {
        closeEditModal()
    }

    const onInputChanged = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const handleDelete = () => {
        startDeletingArticle();
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        setFormSubmitted(true);

        if (formValues.title.length <= 0) return;

        // TODO: 
        await startSavingArticle(formValues);
        closeEditModal();
        setFormSubmitted(false);
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
                <h1 className='h1cm'>  Editar esta nota</h1>
                <hr />


                <form className="pcm" onSubmit={onSubmit}>

                    <label className='lcm' >
                        Titulo
                        <input
                            type="text"
                            className='icm'
                            placeholder="Título del evento"
                            name="title"
                            autoComplete="off"
                            value={formValues.title}
                            onChange={onInputChanged}
                        />
                    </label>

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
                        <span> Guardar </span>
                    </button>

                    <button
                        className="btn btn-outline-primary btn-block icm"
                        onClick={handleDelete}
                    >
                        <i className="far fa-save"></i>
                        <span> Eliminar </span>
                    </button>

                </form>

            </Modal>
        </>
    )
}