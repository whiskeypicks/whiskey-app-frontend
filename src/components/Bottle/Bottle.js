import React from 'react';
import { Link } from 'react-router-dom';
import './Bottle.css';

function Bottle({ bottle, name }) {
  // Array of default bottle image URLs if official_image_path is not available
  const defaultImages = [
    '/images/bottle_a.png',
    '/images/bottle_b.png',
    '/images/bottle_c.png',
    '/images/bottle_d.png',
  ];

// Use the official image if available, otherwise pick a random default image
const image = bottle?.official_image_path || defaultImages[Math.floor(Math.random() * defaultImages.length)];
// Use the bottle name if provided, otherwise fall back to the name prop (for placeholder data)
const bottleName = bottle?.name || name;

return (
  <Link to={`/bottle/${bottle?.barcode || name}`} className="bottle">
    <img src={image} alt={bottleName} className="bottle-image" />
    <p className="bottle-name">{bottleName}</p>
  </Link>
);
}

export default Bottle;