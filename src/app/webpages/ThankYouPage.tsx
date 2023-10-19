import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import './ThankYouPage.css';

const ThankYouPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/PersonalInfoSubmission');
  };
  const handleSubmitCustomer = () => {
    navigate('/FormPage');
  }

  return (
    <div className="container">
      <NavBar />
      <div className="box">
        <h1 className="heading">Thank You!</h1>
        <p className="message">
          Your form has been submitted successfully.
        </p>
        <button onClick={handleGoBack} className="button">Enter Personal Information</button>
        <button onClick={handleSubmitCustomer} className="button">Submit Another Business</button>
      </div>
    </div>
  );
}

export default ThankYouPage;