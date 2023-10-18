import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ThankYouPage.css';

const ThankYouPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <div className="box">  {/* Wrap the message and button in a new div with class "box" */}
        <h1 className="heading">Thank You!</h1>
        <p className="message">
          Your form has been submitted successfully.
        </p>
        <button onClick={handleGoBack} className="button">Go Back</button>
      </div>
    </div>
  );
}

export default ThankYouPage;