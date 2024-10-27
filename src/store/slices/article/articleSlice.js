import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoadingArticles: true,
    articles: [],
    onEditArticle: null,
}

export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        setEditArticle: (state, { payload }) => {
            state.onEditArticle = payload
        },

        createArticle: (state, { payload }) => {
            state.articles.push(payload);
            console.log(payload)
            state.onEditArticle = null
        },

        updateArticle: ( state, { payload } ) => {
            state.articles = state.articles.map( article => {
                if ( article._id === payload._id ) {
                    return payload;
                }
                return article;
            });
        },

        deleteArticle: ( state ) => {
            if ( state.onEditArticle ) {
                state.articles = state.articles.filter( article => article._id !== state.onEditArticle._id );
                state.onEditArticle = null
            }
        },

        loadArticles: ( state, { payload } ) => {
            state.isLoadingArticles = false;
            // state.articles = payload;
            payload.forEach( article => {
                const exist = state.articles.some( dbArticle => dbArticle.id === article.id );
                if(!exist) {
                    state.articles.push(article)
                }
            })
        },

    },
})

export const {
    setEditArticle,
    createArticle,
    updateArticle,
    deleteArticle,
    loadArticles
} = articleSlice.actions