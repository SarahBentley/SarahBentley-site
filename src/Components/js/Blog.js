import React from 'react';
import ArticleList from './ArticleList';

// Sample array of blog posts (replace with your actual data)
const posts = [
  { id: 1, title: 'First Blog Post', summary: 'Summary of the first blog post...' },
  { id: 2, title: 'Second Blog Post', summary: 'Summary of the second blog post...' },
  { id: 3, title: 'Third Blog Post', summary: 'Summary of the third blog post...' },
];

const Blog = () => {
  return (
    <div className="blog">
      <h1>Blog</h1>
      <ArticleList posts={posts} />
    </div>
  );
};

export default Blog;