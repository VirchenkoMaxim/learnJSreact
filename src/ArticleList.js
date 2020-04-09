import React from 'react';
import Article from './Article';

export default function ArticleList({ articles }) {
    const articleElements = articles.map((article, index) =>
        <li key={article.id}>
            <Article article={article} def={index === 0} />
        </li>
    )
    // const art = (article, index) => {
    //     return <li key={article.id}><Article article={article} dafaultOpen={index === 0} /></li>
    // }
    // const articleElements = articles.map(art);


    return (
        <ul>
            {articleElements}
        </ul>
    )
}