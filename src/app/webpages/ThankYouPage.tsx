import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import './css/ThankYouPage.css';
import { BusinessContext } from '../main/BusinessContext'; 
import { UserContext} from '../main/UserContext';
import { createOffer } from '../api/parafinCreateOffer';  

const ThankYouPage: React.FC = () => {
  const navigate = useNavigate();
  const businessContext = useContext(BusinessContext);
  const userContext =useContext(UserContext);

  async function offerCreate() { 
    const businessId = businessContext?.businessId;
    const userId = userContext?.userId;
    if(userId){
      console.log("userId: ", userId);
    } else {
      console.log("No userId found");
    }
    if (businessId) {
      console.log("businessId: " + businessId);
      try {
          const result = await createOffer(businessId, "flex_loan");
          if (result) {
              console.log('Offer created successfully:', result);
          } else {
              console.error('Failed to create offer:', !result);
          }
      } catch (error) {
          console.error('Error creating offer: ', error);
      }
    } else {
        console.error('businessId is undefined or null');
    }
  }

  const handleSeeOffers = () => {
    offerCreate();
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