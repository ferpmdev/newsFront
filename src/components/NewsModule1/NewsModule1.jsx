import React from 'react'
import './modNews.css';
import { useModalStore } from '../../hooks/useModalStore';

export const NewsModule1 = ({ id, title, summary }) => {
    const { openEditModal } = useModalStore()

    return (
        <button onClick={openEditModal} >
            <article className="itemNews">
                <h1>{title}</h1>
                <h4 className='summary' >{summary}</h4>
            </article>
        </button>
    )
}
