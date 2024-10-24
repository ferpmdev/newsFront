import { createSlice } from '@reduxjs/toolkit'
import { fakeData } from '../../../fakeData/fakedata'

const tempArticle = {
    _id: new Date().getTime(),
    title: 'Racing campeón',
    summary: 'El primer grande tiene los colores màs lindos del mundo',
    imageUrl: 'https://services.meteored.com/img/article/por-que-el-cielo-se-torna-naranja-durante-el-atardecer-1684769231676_1280.jpeg'
};


const initialState = {
    articles: [
        ...fakeData,
        tempArticle
    ],
    onEditArticle: null,
}

export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        onSetEditArticle: (state, { payload }) => {
            state.onEditArticle = payload
        },

        createArticle: (state, { payload }) => {
            state.articles.push(payload);
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
        }

    },
})

export const {
    onSetEditArticle,
    createArticle,
    updateArticle,
    deleteArticle
} = articleSlice.actions