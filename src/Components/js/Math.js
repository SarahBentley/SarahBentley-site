import React from 'react';
import MArticleList from './MArticleList';
import '../css/Random.css'

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
    title: "Chips on an Infinite Chessboard",
    description: "Math Project Laboratory - Studying the redistribution of chips on an infinite chessboard.",
    id: 4
  },
  {
    title: "Modeling Percolation with Graphs",
    description: "Math Project Laboratory - Studying finite and infinite clusters of nodes induced by percolation on a graph.",
    id: 5
  },
  {
    title: "Probabilistic Proofs of the Hook Formula and Young-Frobenius Formula for Young Tableaux and Trees",
    description: "Discrete mathematics seminar final paper.",
    id: 6
  },
  {
    title: "Courseroad Optimization",
    description: "Finding the optimal way to complete MIT's Artificial Intelligence & Decision-Making major",
    id: 2
  }
]


const Math = () => {
  return (
    <div>
      <h2 className="blog-title">Projects & Blogs</h2>
      <MArticleList blogPosts= { MathPosts } />
    </div>

  );
};

export default Math