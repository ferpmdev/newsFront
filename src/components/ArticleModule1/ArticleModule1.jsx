import React from 'react'
import './articleModule1.css';
import { useModalStore } from '../../hooks/useModalStore';
import { useArticleStore } from '../../hooks/useArticleStore';

export const ArticleModule1 = ({ title, summary, imageUrl, id }) => {
    const { openEditModal } = useModalStore()
    const { startEditArticle } = useArticleStore()

    const handleClickEdit = () => {
        startEditArticle({
            title: title,
            summary: summary,
            imageUrl: imageUrl,
            id: id,
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
            <section className="am-ct" >
                <h1 className='pt-serif-regular am1-h1' >{title}</h1>
                <h4 className='am1-summary' >{summary}</h4>
            </section>
        </article>
    )
}
