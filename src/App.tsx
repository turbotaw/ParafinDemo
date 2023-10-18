import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThankYouPage from './app/webpages/ThankYouPage';
import FormPage from './app/webpages/FormPage';
import MerchantHomePage from './app/webpages/MerchantHomePage';


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
