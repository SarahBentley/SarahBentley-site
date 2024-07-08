import React from 'react';
import ArticleItem from './ArticleItem';

const ArticleList = ({ posts }) => {
  return (
    <ul className="article-list">
      {posts.map(post => (
        <ArticleItem key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default ArticleList;