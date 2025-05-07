import React, { useState, useEffect } from 'react';
import '../styles/HomePage.css';
import Bottle from '../components/Bottle/Bottle';
import BottomNav from '../components/Nav/BottomNav';
import Header from '../components/Header/Header';

function HomePage() {
  const [myBarBottles, setMyBarBottles] = useState([]);

  // Fetch the user's "My Bar" bottles when the component mounts
  useEffect(() => {
    fetch('http://localhost:5000/api/my-bar')
      .then((response) => {
        console.log('Response status:', response.status);
        return response.json();
      })
      .then((data) => {
        console.log('Fetched My Bar bottles:', data);
        setMyBarBottles(data);
      })
      .catch((error) => {
        console.error('Error fetching My Bar bottles:', error);
      });
  }, []);

  const shelves = [
    { title: 'My Bar', bottles: myBarBottles },
    { title: 'Recommended', bottles: ['Bottle 1', 'Bottle 2', 'Bottle 3', 'Bottle 4', 'Bottle 5', 'Bottle 6', 'Bottle 7', 'Bottle 8', 'Bottle 9', 'Bottle 10', 'Bottle 11', 'Bottle 12'] },
    { title: 'Wish List', bottles: ['Bottle AB', 'Bottle BA', 'Bottle AC', 'Bottle AD', 'Bottle BB', 'Bottle CA', 'Bottle BC', 'Bottle BD'] },
    { title: 'Activity', bottles: ['Bottle A', 'Bottle B', 'Bottle C', 'Bottle D', 'Bottle E', 'Bottle F', 'Bottle G', 'Bottle H', 'Bottle I', 'Bottle J'] },
  ];

  console.log('My Bar bottles state:', myBarBottles);

  return (
    <div className="homepage">
      <Header showLogo={true} showProfile={true} />
      <div className="shelves-container">
        {shelves.map((shelf, index) => (
          <div>
            <div key={index} className="shelf">
              <div className="bottle-list">
                {shelf.title === 'My Bar' ? (
                  shelf.bottles.map((bottle) => (
                    <Bottle key={bottle.barcode} bottle={bottle} />
                  ))
                ) : (
                  shelf.bottles.map((bottle, bottleIndex) => (
                    <Bottle key={bottleIndex} name={bottle} />
                  ))
                )}
              </div>
            </div>
            <div className="shelf-label">{shelf.title}</div>
          </div>
        ))}
      </div>
      <BottomNav />
    </div>
  );
}

export default HomePage;