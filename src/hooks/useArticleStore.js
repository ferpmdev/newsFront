import { useDispatch, useSelector } from 'react-redux'
import { createArticle, deleteArticle, setEditArticle, updateArticle, loadArticles } from '../store'
import newsApi from '../api/newsApi';

export const useArticleStore = () => {

    const dispatch = useDispatch()

    const { articles, onEditArticle } = useSelector(state => state.article);
    const { user } = useSelector(state => state.auth)

    const startEditArticle = (articleEvent) => {
        dispatch(setEditArticle(articleEvent))
    }

    const startSavingArticle = async(articleEvent) => {
        //* TODO update article

        // Todo bien
        if(articleEvent._id) {
            // actualizando
            dispatch( updateArticle({ ...articleEvent }) );

        }else{
            // creando
            const { data } = await newsApi.post('/articles', articleEvent)
            dispatch(createArticle({...articleEvent, _id: data.article.id, user }))
        }
    }

    const startDeletingArticle = () => {
        // Todo: Llegar al backend

        dispatch( deleteArticle() );
    }

    const startLodingsArticles = async () => {
        try {
            const { data } = await newsApi.get('/articles')
            dispatch(loadArticles(data.articles))
            
        } catch (error) {
            console.log('Ocurrió un error al cargar las notas')
            console.log(error)
            
        }
    }


    return {

        //* Propiedades
        articles,
        onEditArticle,

        //* Metodos
        startEditArticle,
        startSavingArticle,
        startDeletingArticle,
        createArticle,
        startLodingsArticles

    }
}