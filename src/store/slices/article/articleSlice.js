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
            state.onEditArticle = null
        },

        updateArticle: ( state, { payload } ) => {
            state.articles = state.articles.map( article => {
                if ( article.id === payload.id ) {
                    return payload;
                }
                return article;
            });
        },

        deleteArticle: ( state ) => {
            if ( state.onEditArticle ) {
                state.articles = state.articles.filter( article => article.id !== state.onEditArticle.id );
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

        logOutNewspaper: ( state ) => {
            state.isLoadingArticles = true,
            state.articles = [],
            state.onEditArticle = null
        }
    }
});

export const {
    createArticle,
    deleteArticle,
    loadArticles,
    logOutNewspaper,
    setEditArticle,
    updateArticle,
} = articleSlice.actions