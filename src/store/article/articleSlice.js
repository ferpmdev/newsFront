import { createSlice } from '@reduxjs/toolkit'
import { fakeData } from '../../fakeData/fakedata'

const tempArticle = {
    _id: new Date().getTime(),
    title: 'Racing campeón',
    summary: 'El primer grande tiene los colores màs lindos del mundo',
    imageUrl: 'https://services.meteored.com/img/article/por-que-el-cielo-se-torna-naranja-durante-el-atardecer-1684769231676_1280.jpeg'
};


const initialState = {
    isSaving: true,
    articles: [
        ...fakeData,
        tempArticle
    ],
    messageSave: '',
    OnEditArticle: null,
}

export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        onSetEditArticle: (state, { payload }) => {
            state.OnEditArticle = payload
        },

        createArticle: (state, { payload }) => {
            state.articles.push(payload);
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
            if ( state.articles ) {
                state.articles = state.articles.filter( article => article._id !== state.OnEditArticle._id );
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