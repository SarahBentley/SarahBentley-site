import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import grayMatter from 'gray-matter';

const BlogPost = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`../../../public/Articles/article${id}.md`);
        const markdownContent = await response.text();

        const { data, content } = grayMatter(markdownContent);
        const htmlContent = await remark().use(remarkHtml).process(content);

        setArticle({
          title: data.title,
          date: data.date,
          content: htmlContent.toString(),
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

  return (
    <div className="blog-post">
      <h1>{article.title}</h1>
      <p>Date: {article.date}</p>
      <div className="post-content" dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  );
};

export default BlogPost;