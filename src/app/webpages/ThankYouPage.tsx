import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ThankYouPage.css';

const ThankYouPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };
  const handleSubmitCustomer = () => {
    navigate('/FormPage');
  }

  return (
    <div className="container">
      <div className="box">
        <h1 className="heading">Thank You!</h1>
        <p className="message">
          Your form has been submitted successfully.
        </p>
        <button onClick={handleGoBack} className="button">Go To Merchant Account</button>
        <button onClick={handleSubmitCustomer} className="button">Submit Another Customer</button>
      </div>
    </div>
  );
}

export default ThankYouPage;