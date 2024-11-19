import React from 'react';
import MArticleList from './MArticleList';

const MathPosts = [
  {
    title: "Comparing Transformers and Bilinear Models on Computing Parity",
    description: "Examining the disparate algorithmic abilities of transformers and simple recurrent models",
    id: 1
  },
  {
    title: "Handwritten Mathematical Expression Recognition for Automated Grading",
    description: "Training models to recognize and parse handwritten mathematical expressions to advance automated grading techniques",
    id: 3
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