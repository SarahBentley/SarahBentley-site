import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../css/Blog.css'

const BlogPost = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    console.log('BlogPost component mounted');
    const fetchArticle = async () => {
      console.log('Fetching article with ID:', id);
      try {
        const response = await fetch(`http://localhost:4000/api/math/${id}`);; // Fetch from your new API
        const articleData = await response.json();
        console.log('Article data:', articleData);

        setArticle({
          title: articleData.title,
          date: articleData.date,
          content: articleData.content,
        });
      } catch (error) {
        console.error('Error fetching or parsing article:', error);
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>; // Placeholder for loading state
  }
  console.log(article.content)
  return (
    <div className="blog-post">
      <h1>{article.title}</h1>
      <p>Date: {article.date}</p>
      <div className="post-content" dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  );
};

export default BlogPost;