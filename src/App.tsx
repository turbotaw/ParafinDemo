import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThankYouPage from './app/webpages/ThankYouPage';
import BusinessFormPage from './app/webpages/BusinessFormPage';
import MerchantHomePage from './app/webpages/MerchantHomePage';
import PersonFormPage from './app/webpages/PersonFormPage';
import OfferPage from './app/webpages/OfferPage';
import BankInfoPage from './app/webpages/BankInfoPage';


function App() {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<MerchantHomePage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/BusinessSubmission" element={<BusinessFormPage />} />
        <Route path="/PersonalInfoSubmission" element={<PersonFormPage />}/>
        <Route path="/OfferPage" element={<OfferPage />}/>
        <Route path="/BankInfo" element={<BankInfoPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
