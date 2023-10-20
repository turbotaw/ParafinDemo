import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import './ThankYouPage.css';

const ThankYouPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSeeOffers = () => {
    navigate('/OfferPage');
  };

  return (
    <div className="container">
      <NavBar />
      <div className="box">
        <h1 className="heading">Thank You!</h1>
        <p className="message">
          You're one step closer to getting the financing your business needs to continue growing! See your offers now, by clicking below.
        </p>
        <button onClick={handleSeeOffers} className="button">See offers now</button>
      </div>
    </div>
  );
}

export default ThankYouPage;