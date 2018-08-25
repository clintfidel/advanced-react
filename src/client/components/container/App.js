import React, { Component } from 'react';
import DataApi from '../../../server/DataApi';
import { data } from '../../../server/testData';
import ArticlesList from '../presentational/ArticlesList';

const api = new DataApi(data);

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors()
    };
  }


articlesAction = {
  lookupAuthor: authorId => this.state.authors[authorId]
}

render() {
  return (
    <div>
      <ArticlesList
        articles= {this.state.articles}
        actions= {this.articlesAction}
      />
    </div>
  );
}
}

export default App;
