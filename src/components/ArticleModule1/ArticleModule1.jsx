import React from 'react'
import './articleModule1.css';
import { useModalStore } from '../../hooks/useModalStore';
import { useArticleStore } from '../../hooks/useArticleStore';

export const ArticleModule1 = ({ title, summary, imageUrl, _id }) => {
    const { openEditModal } = useModalStore()
    const { startEditArticle } = useArticleStore()

    const handleClickEdit = () => {
        startEditArticle({
            title: title,
            summary: summary,
            imageUrl: imageUrl,
            _id: _id,
            onEditArticle: true,
        });
        openEditModal();
    }

    return (
            <article onClick={handleClickEdit} className="itemNews">
                <img
                    src={imageUrl}
                    alt={title}
                    className='img'
                />
                <h1 className='pt-serif-bold h1' >{title}</h1>
                <h4 className='pt-serif-regular summary' >{summary}</h4>
            </article>
    )
}
