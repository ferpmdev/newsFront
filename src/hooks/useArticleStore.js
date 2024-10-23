import { useDispatch, useSelector } from 'react-redux'
import { createArticle, deleteArticle, onSetEditArticle, updateArticle } from '../store'

export const useArticleStore = () => {

    const dispatch = useDispatch()

    const { articles } = useSelector(state => state.article);

    const startEditArticle = (articleEvent) => {
        dispatch(onSetEditArticle(articleEvent))
    }

    const startSavingArticle = async(articleEvent) => {
        //* TODO LLEGAR AL BACKEND

        // Todo bien
        if(articleEvent._id) {
            // actualizando
            dispatch( updateArticle({ ...articleEvent }) );

        }else{
            // creando
            dispatch(createArticle({...articleEvent, _id: new Date().getTime()}))
        }
    }

    const startDeletingArticle = () => {
        // Todo: Llegar al backend

        dispatch( deleteArticle() );
    }

    return {

        //* Propiedades
        articles,

        //* Metodos
        startEditArticle,
        startSavingArticle,
        startDeletingArticle,
        createArticle

    }
}