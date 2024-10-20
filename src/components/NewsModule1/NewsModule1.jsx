import React from 'react'
import './modNews.css';
import { useModalStore } from '../../hooks/useModalStore';

export const NewsModule1 = ({ id, title, summary }) => {
    const { openNewsModal } = useModalStore()

    return (
        <button onClick={openNewsModal} >
            <article className="itemNews">
                <h1>{title}</h1>
                <h4 className='summary' >{summary}</h4>
            </article>
        </button>
    )
}
