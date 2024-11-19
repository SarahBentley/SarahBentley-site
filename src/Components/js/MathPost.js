import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Math1 from './BlogPosts/Math1';
import Math2 from './BlogPosts/Math2';
import '../css/Blog.css'

const MathPost = () => {
  const { id } = useParams(); // Get the post id from the URL params

  if (id === '1') {
    return (
      <div className="blog-post">
        <Math1/>
      </div>
  )} else if (id === '2') {
    return (
      <div className="blog-post">
        <Math2/>
      </div>
  )}
};

export default MathPost;