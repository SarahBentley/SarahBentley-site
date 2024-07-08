import React from 'react';
import { Link } from 'react-router-dom';

const ArticleItem = ({ post }) => {
  return (
    <li className="article-item">
      <Link to={`/blog/${post.id}`}>
        <h2>{post.title}</h2>
      </Link>
      <p>{post.summary}</p>
    </li>
  );
};

export default ArticleItem;