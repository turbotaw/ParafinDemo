import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserContext from './app/UserContext';
import ThankYouPage from './app/webpages/ThankYouPage';
import BusinessFormPage from './app/webpages/BusinessFormPage';
import MerchantHomePage from './app/webpages/MerchantHomePage';
import PersonFormPage from './app/webpages/PersonFormPage';
import OfferPage from './app/webpages/OfferPage';
import BankInfoPage from './app/webpages/BankInfoPage';


function App() {
  const [userId, setUserId] = useState<string | null>(null);
  return (
    <UserContext.Provider value={{ userId, setUserId }}>
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
    </UserContext.Provider>
  );
}

export default App;
