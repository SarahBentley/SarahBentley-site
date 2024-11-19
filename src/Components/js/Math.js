import React from 'react';
import MArticleList from './MArticleList';

const MathPosts = [
  {
    title: "Handwritten Mathematical Expression Recognition for Automated Grading",
    description: "Training models to recognize and parse handwritten mathematical expressions to advance automated grading techniques",
    id: 1
  },
  {
    title: "Courseroad Optimization",
    description: "Finding the optimal way to complete MIT's Artificial Intelligence & Decision-Making major",
    id: 2
  }
]


const Math = () => {
  return (
    <MArticleList blogPosts= { MathPosts } />
  );
};

export default Math