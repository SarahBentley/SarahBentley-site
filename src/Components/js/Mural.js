import React from 'react';
import '../css/Mural.css'; // Make sure to import the CSS file

const images = [
  'profile_pic.jpg', // Replace with the actual paths to your images
  'profile_pic.jpg',
  'profile_pic.jpg',
  'profile_pic.jpg',
  'profile_pic.jpg',
  'profile_pic.jpg',
  'profile_pic.jpg',
  'profile_pic.jpg',
  'profile_pic.jpg'
];

const Mural = () => {
  return (
    <div className="mural-container">
      {images.map((image, index) => (
        <div key={index} className="mural-item" style={{ backgroundImage: `url(${image})` }}>
        </div>
      ))}
    </div>
  );
};

export default Mural;