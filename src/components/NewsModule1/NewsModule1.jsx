import React from 'react'
import './modNews.css';
import { useModalStore } from '../../hooks/useModalStore';
import { useArticleStore } from '../../hooks/useArticleStore';

export const NewsModule1 = ({ title, summary, imageUrl, _id }) => {
    const { openEditModal } = useModalStore()
    const {startEditArticle} = useArticleStore()

    const handleClickEdit = () => {
        startEditArticle({
            isSaving: true,
            messageSave: '',
            title: title,
            summary: summary,
            imageUrl: imageUrl,
            _id: _id,
            OnEditArticle: true,
        });
        openEditModal();
    }
    
    return (
        <button onClick={handleClickEdit} >
            <article className="itemNews">
                <h1>{title}</h1>
                <h4 className='summary' >{summary}</h4>
            </article>
        </button>
    )
}
