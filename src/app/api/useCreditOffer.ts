import { useState, useEffect } from 'react';
import { fetchCreditOffer } from "../api/businessData";

interface CreditOfferType {
    offer: string;
}

export const useCreditOffer = (userId: string | null) => {
    
  const [creditOffer, setCreditOffer] = useState<CreditOfferType | null>(null);

  useEffect(() => {
    if (userId) {
      fetchCreditOffer(userId)
        .then(offer => setCreditOffer({offer: offer}))
        .catch(error => console.error('Error fetching credit offer:', error));
    }
  }, [userId]);

  return creditOffer;
};