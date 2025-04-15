import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BottleDetailsPage from './pages/BottleDetailsPage';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bottle/:id" element={<BottleDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;