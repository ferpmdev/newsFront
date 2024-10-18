import React from 'react'
import './modNews.css';

export const ModNews1 = ({id, title, summary}) => {
    return (
        <article className="itemNews">
            <h1>{title}</h1>
            <h4 className='summary' >{summary}</h4>
        </article>
    )
}
