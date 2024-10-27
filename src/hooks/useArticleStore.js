import { useDispatch, useSelector } from 'react-redux'
import { createArticle, deleteArticle, setEditArticle, updateArticle, loadArticles } from '../store'
import newsApi from '../api/newsApi';
import Swal from 'sweetalert2';

export const useArticleStore = () => {

    const dispatch = useDispatch()

    const { articles, onEditArticle } = useSelector(state => state.article);
    const { user } = useSelector(state => state.auth)

    const startEditArticle = (articleEvent) => {
        dispatch(setEditArticle(articleEvent))
    }

    const startSavingArticle = async (articleEvent) => {

        try {
            if (articleEvent.id) {
                await newsApi.put(`/articles/${articleEvent.id}`, articleEvent)
                dispatch(updateArticle({ ...articleEvent, user }));
                return
            }

            const { data } = await newsApi.post('/articles', articleEvent)
            dispatch(createArticle({ ...articleEvent, id: data.article.id, user }))

        } catch (error) {
            // console.log(error)
            Swal.fire('No puede editar esta nota debido a que pertenece a otro usuario', error.response.data.msg, 'error')
        }
    }

    const startDeletingArticle = async () => {
        try {

            await newsApi.delete(`/articles/${onEditArticle.id}`)
            dispatch(deleteArticle());
            return


        } catch (error) {
            Swal.fire('No puede borrar esta nota debido a que pertenece a otro usuario', error.response.data.msg, 'error')
        }

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