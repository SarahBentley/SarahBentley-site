import React from "react";
import "../css/Blog.css"; // Import the CSS file
import { Link } from 'react-router-dom';

const ArticleItem = ({ image, title, date, columnSpan, rowSpan, id, category }) => {
  return (
    <div
      className="grid-elt"
      style={{
        gridColumn: `span ${columnSpan}`, // Dynamic column span
        gridRow: `span ${rowSpan}`,       // Dynamic row span
      }}
    >
      <Link to={`/${category}/${id}`}>
        <img src={image} alt={title} />

      <div className="grid-elt-content">
        <h2>{title}</h2>
      </div>
      </Link>
    </div>
  );
};

const ArticleList = ({ blogPosts}) => {
  return (
    <div style={{margin: 20}}>
      <div className="grid-container">
        {blogPosts.map((post, index) => (
          <ArticleItem
            key={index}
            image={post.image}
            title={post.title}
            date={post.date}
            columnSpan={post.columnSpan} // Pass the custom column span as a prop
            rowSpan={post.rowSpan}       // Pass the custom row span as a prop
            id={post.id}
            category = {post.category}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;