import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThankYouPage from './ThankYouPage';
import FormPage from './FormPage';


function App() {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<FormPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
}

export default App;
