import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import BottomNav from '../components/Nav/BottomNav';
import Modal from 'react-modal';
import '../styles/BottleDetailsPage.css';

function BottleDetailsPage() {
  const { id } = useParams(); // Get bottle ID from URL
  const [bottle, setBottle] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});
  const [isCheckInModalOpen, setIsCheckInModalOpen] = useState(false);
  const [isLogPricingModalOpen, setIsLogPricingModalOpen] = useState(false);

  useEffect(() => {
    // Placeholder data; replace with API call later
    setBottle({
      name: 'Sample Whiskey',
      distiller: 'Sample Distiller',
      abv: '40%',
      description: 'A rich, smooth whiskey.',
      image: '/images/sample_bottle.jpg',
      tastingNotes: 'Oak, vanilla, caramel...',
      similarBottles: ['Whiskey A', 'Whiskey B'],
      stats: { ownedBy: 1245, recommendedBy: '82%' },
      social: { friendsWishlists: 3, activity: 'John checked in yesterday' },
    });
  }, [id]);

  if (!bottle) return <div>Loading...</div>;

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="bottle-details-page">
      <Header showLogo={false} showProfile={false} showBack={true} />
      <div className="bottle-details-content">
        <div className="top-section">
          <img src={bottle.image} alt={bottle.name} className="bottle-image" />
          <h1>{bottle.name}</h1>
          <p>{bottle.distiller} | {bottle.abv}</p>
          <p>{bottle.description}</p>
          <div className="primary-actions">
            <button onClick={() => console.log('Add to Collection')}>Add to Collection</button>
            <button onClick={() => setIsCheckInModalOpen(true)}>Check In</button>
            <button onClick={() => setIsLogPricingModalOpen(true)}>Log a Pricing Pic</button>
          </div>
        </div>
        <div className="scrollable-section">
          <ExpandableSection
            title={`Tasting Notes`}
            summary={`Oak, vanilla...`}
            isExpanded={expandedSections.tastingNotes}
            toggle={() => toggleSection('tastingNotes')}
            content={<p>{bottle.tastingNotes}</p>}
          />
          <ExpandableSection
            title={`Similar Bottles (${bottle.similarBottles.length})`}
            summary={`${bottle.similarBottles[0]}...`}
            isExpanded={expandedSections.similarBottles}
            toggle={() => toggleSection('similarBottles')}
            content={
              <ul>
                {bottle.similarBottles.map((bottle, index) => (
                  <li key={index}>{bottle}</li>
                ))}
              </ul>
            }
          />
          <ExpandableSection
            title={`Stats`}
            summary={`Owned by ${bottle.stats.ownedBy}`}
            isExpanded={expandedSections.stats}
            toggle={() => toggleSection('stats')}
            content={
              <p>
                Owned by {bottle.stats.ownedBy} users | Recommended by {bottle.stats.recommendedBy}
              </p>
            }
          />
          <ExpandableSection
            title={`Social`}
            summary={`${bottle.social.friendsWishlists} friends`}
            isExpanded={expandedSections.social}
            toggle={() => toggleSection('social')}
            content={
              <p>
                On {bottle.social.friendsWishlists} friends' wishlists | {bottle.social.activity}
              </p>
            }
          />
        </div>
      </div>
      <BottomNav />

      {/* Check In Modal */}
      <Modal isOpen={isCheckInModalOpen} onRequestClose={() => setIsCheckInModalOpen(false)}>
        <h2>Check In</h2>
        <p>Choose your check-in type:</p>
        <button onClick={() => console.log('Neat Pour')}>Neat Pour</button>
        <button onClick={() => console.log('On the Rocks')}>On the Rocks</button>
        <button onClick={() => console.log('Mixed Drink')}>Mixed Drink</button>
        <button onClick={() => console.log('Blind Tasting')}>Blind Tasting</button>
        <button onClick={() => setIsCheckInModalOpen(false)}>Close</button>
      </Modal>

      {/* Log Pricing Pic Modal */}
      <Modal isOpen={isLogPricingModalOpen} onRequestClose={() => setIsLogPricingModalOpen(false)}>
        <h2>Log a Shelf Price</h2>
        <p>Upload a picture and enter the price:</p>
        <input type="file" accept="image/*" />
        <input type="text" placeholder="Price" />
        <button onClick={() => console.log('Submit Price')}>Submit</button>
        <button onClick={() => setIsLogPricingModalOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}

// Expandable Section Component
function ExpandableSection({ title, summary, isExpanded, toggle, content }) {
  return (
    <div className="expandable-section">
      <button onClick={toggle}>
        {title} <span>{summary}</span> {isExpanded ? '▲' : '▼'}
      </button>
      {isExpanded && <div className="section-content">{content}</div>}
    </div>
  );
}

export default BottleDetailsPage;