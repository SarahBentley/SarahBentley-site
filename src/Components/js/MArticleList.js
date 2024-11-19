import React from "react";
import "../css/Blog.css"; // Import the CSS file
import { Link } from 'react-router-dom';

const MArticleItem = ({ title, description, id}) => {
  return (
    <Link to={`/math/${id}`}>
    <div className="article">
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
    </Link>
  );
};

const MArticleList = ({ blogPosts}) => {
  return (
    <div style={{margin: 20}}>
      <div className="article-container">
        {blogPosts.map((post, index) => (
          <MArticleItem
            key={index}
            title={post.title}
            description={post.description}
            id={post.id}
          />
        ))}
      </div>
    </div>
  );
};

export default MArticleList;