import Modal from 'react-modal';
import { useModalStore } from '../../hooks/useModalStore';
import { useSelector } from 'react-redux';
import { useArticleStore } from '../../hooks/useArticleStore';
import { useEffect, useState } from 'react';

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
    const { OnEditArticle } = useSelector(state => state.article);

    const [formSubmitted, setFormSubmitted] = useState(false);

    const [formValues, setFormValues] = useState({
        title: '',
        notes: '',
    });



    useEffect(() => {
        if (OnEditArticle !== null) {
            setFormValues({ ...OnEditArticle });
        }

    }, [OnEditArticle])


    const { isEditModalOpen, closeEditModal } = useModalStore()

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
                <h1> Editar esta nota</h1>
                <hr />

                <h4 className='summary' >este es el {formValues._id}</h4>


                <form className="container" onSubmit={onSubmit}>

                    <hr />
                    <div className="form-group mb-2">
                        <label>Titulo</label>
                        <input
                            type="text"
                            className=''
                            placeholder="Título del evento"
                            name="title"
                            autoComplete="off"
                            value={formValues.title}
                            onChange={onInputChanged}
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
                            value={formValues.summary}
                            onChange={onInputChanged}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-outline-primary btn-block"
                    >
                        <i className="far fa-save"></i>
                        <span> Guardar </span>
                    </button>


                    <button
                        className="btn btn-outline-primary btn-block"
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