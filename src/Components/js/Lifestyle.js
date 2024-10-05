import React from "react";
import ArticleList from './ArticleList'

const lifestylePosts = [
  {
    image: "surfing.jpeg", // Replace with your image URL
    title: "Surfing with the fam",
    date: "Sep 06, 2022",
    columnSpan: 7, // Custom column span
    rowSpan: 4,     // Custom row span
    id: 2,
    category: 'lifestyle'
  },
  {
    image: "hiking.jpeg",
    title: "Hiking in Switzerland",
    date: "Sep 10, 2022",
    columnSpan: 5, // Custom column span
    rowSpan: 2,     // Custom row span
    id: 1,
    category: 'lifestyle'
  },
  {
    image: "https://ik.imagekit.io/j91ks0fc6/dolomites/IMG_3026.jpg?updatedAt=1728156226923",
    title: "Hiking in the Dolomites",
    date: "Sep 10, 2022",
    columnSpan: 5, // Custom column span
    rowSpan: 2,     // Custom row span
    id: 3,
    category: 'lifestyle'
  }
];

const Lifestyle = () => {
  return (
    <ArticleList blogPosts={ lifestylePosts } />
  );
};

export default Lifestyle;