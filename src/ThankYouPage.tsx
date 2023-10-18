import React from 'react';
import './ThankYouPage.css';  // Import the CSS
import { useNavigate } from 'react-router-dom';

const ThankYouPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');  // Assumes the form is located at the root path
  };

  return (
    <div className="container">
      <h1 className="heading">Thank You!</h1>
      <p className="message">
        Your form has been submitted successfully.
      </p>
      <button onClick={handleGoBack} className="button">Go Back</button>
    </div>
  );
}

export default ThankYouPage;