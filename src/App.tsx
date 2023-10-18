import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThankYouPage from './ThankYouPage';
import FormPage from './FormPage';
import MerchantHomePage from './MerchantHomePage';


function App() {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<MerchantHomePage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/FormPage" element={<FormPage />} />
      </Routes>
    </Router>
  );
}

export default App;
