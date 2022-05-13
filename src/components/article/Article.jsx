import React from 'react';
import "./article.css";

function Article( {imgUrl, date, title} ) {
  return (
    <div className='gpt3__blog-content_article'>
      <div className="gpt3__blog-content_article-image">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="gpt3__blog-content_article-content">
        <div>
          <p>{date}</p>
          <h2>{title}</h2>
        </div>

        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article;