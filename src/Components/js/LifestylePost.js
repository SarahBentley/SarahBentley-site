import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const LifestylePost = () => {
  const { id } = useParams(); // Get the post id from the URL params
  const [postContent, setPostContent] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Fetch the HTML file based on the post ID
        const response = await fetch(`http://localhost:4000/api/lifestyle/${id}`)
        if (!response.ok) {
          throw new Error('Post not found');
        }
        const htmlContent = await response.text();
        setPostContent(htmlContent); // Set the fetched HTML content
        console.log("html content:", htmlContent)
      } catch (error) {
        console.error('Error fetching post:', error);
        setPostContent('<p>Post not found.</p>'); // Fallback if the post is not found
      }
    };

    fetchPost();
  }, [id]);

  if (!postContent) {
    return <div>Loading...</div>; // Show a loading state while fetching
  }

  return (
    <div className="blog-post">
      <div dangerouslySetInnerHTML={{ __html: postContent }} /> {/* Inject the HTML */}
    </div>
  );
};

export default LifestylePost;