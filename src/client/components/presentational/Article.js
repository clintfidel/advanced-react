import React from 'react';

const styles = {
  title: {
    marginTop: 10,
    fontWeight: 'bold'
  },
  date: {
    color: 'gray',
    paddingTop: 5,
    paddingBottom: 5

  },
  artcleBody: {
    borderLeftStyle: 'solid',
    borderLeftColor: '#aaa',
    borderLeftWidth: 3,
    borderRadius: 3,
    marginLeft: 20,
    paddingLeft: 5,
  },
  author: {
    paddingBottom: 10
  }
};
const formatDate = (date) => new Date(date).toDateString();
const Article = ({ author, article }) => (
  <div>
    <div style = {styles.title} > {article.title}</div>
    <div style = {styles.date}> {formatDate(article.date)}</div>
    <div style = {styles.author}>
      <a href={author.website}>
        {author.firstName} {author.lastName}
      </a>
    </div>

    <div style = {styles.artcleBody}> {article.body}</div> <hr />
  </div>
);

export default Article;
