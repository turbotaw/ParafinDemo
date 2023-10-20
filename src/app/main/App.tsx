import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './UserContext'; 
import { BusinessProvider } from './BusinessContext';
import ThankYouPage from '../webpages/ThankYouPage';
import BusinessFormPage from '../webpages/BusinessFormPage';
import MerchantHomePage from '../webpages/MerchantHomePage';
import PersonFormPage from '../webpages/PersonFormPage';
import OfferPage from '../webpages/OfferPage';
import BankInfoPage from '../webpages/BankInfoPage';
import '../webpages/css/button.css';

function App() {
  return (
    <UserProvider> 
      <BusinessProvider>
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
      </BusinessProvider>
    </UserProvider>
  );
}

export default App;