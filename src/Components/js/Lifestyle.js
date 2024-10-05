import React from "react";
import ArticleList from './ArticleList'

const lifestylePosts = [
  {
    image: "surfing.jpeg", // Replace with your image URL
    title: "Surfing with the fam",
    date: "Sep 06, 2022",
    columnSpan: 8, // Custom column span
    rowSpan: 3,     // Custom row span
    id: 2,
    category: 'lifestyle'
  },
  {
    image: "hiking.jpeg",
    title: "Hiking in Switzerland",
    date: "Sep 10, 2022",
    columnSpan: 4, // Custom column span
    rowSpan: 2,     // Custom row span
    id: 1,
    category: 'lifestyle'
  }
];

const Lifestyle = () => {
  return (
    <ArticleList blogPosts={ lifestylePosts } />
  );
};

export default Lifestyle;