import React from 'react';
import Article from './Article';

const ArticlesList = ({ articles, actions }) => (
  <div>
    {Object.values(articles).map(article => {
      console.log(article, actions.lookupAuthor(article.authorId));
      return (<Article
        key={article.id}
        article={article}
        author={actions.lookupAuthor(article.authorId)}
      />);
    })}
  </div>
);
export default ArticlesList;
