import React, { FC, useEffect, useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { US_STATES } from '../constants/StateOptions';
import NavBar from './components/NavBar';
import { createPerson } from '../api/parafinCreatePerson';
import '../main/App.css';
import {UserContext} from '../main/UserContext';
import { BusinessContext } from '../main/BusinessContext'; 
import { businessIdMapping, userToIdMapping} from '../constants/userMapping';


interface FormData {
  first_name: string;
  last_name: string;
  contact_email: string;
  contact_phone: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
  };
  linked_businesses: Array<{
    id: string;
    relationship: {
      is_beneficial_owner: boolean;
      is_representative: boolean;
    };
  }>;
}

const PersonFormPage: FC = () => {
  const userContext = useContext(UserContext);
  const businessContext = useContext(BusinessContext);
  const [formData, setFormData] = useState<FormData>({
    first_name: '',
    last_name: '',
    contact_email: '',
    contact_phone: '',
    address: {
      line1: '',
      line2: '',
      city: '',
      state: '',
      postal_code: '',
      country: ''
    },
    linked_businesses: [
      {
        id: '',
        relationship: {
          is_beneficial_owner: true,
          is_representative: true
        }
      }
    ]
  });

  useEffect(() => {
    const userId = userContext?.userId;
    console.log("userId "+ userId);
    const businessId = businessContext?.businessId; 
    console.log("businessId "+ businessId);
    if (businessId) {
      setFormData(currentState => ({
        ...currentState,
        linked_businesses: [{
          ...currentState.linked_businesses[0],
          id: businessId,
        }]
      }));
    }
  }, [userContext]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'state') {
      setFormData(prevState => ({
        ...prevState,
        address: {
          ...prevState.address,
          [name]: value
        }
      }));
    } else if (name in formData) {
      setFormData({
        ...formData,
        [name]: value
      });
    } else {
      setFormData(prevState => ({
        ...prevState,
        address: {
          ...prevState.address,
          [name]: value
        }
      }));
    }
  };

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await createPerson(formData);
      if (result.success && result.data) {
        const personId = result.data.id;
        console.log("personId: " + personId);
        
        const userId = userContext?.userId;
        const businessId = businessContext?.businessId;
        
    
        if (businessId) { 
            console.log("businessId: " + businessId);
            businessIdMapping.set(personId, businessId);
            console.log('Mapped userId to businessId:', personId, businessId);
            userContext?.setUserId(personId);
            console.log("userId updated to: ", personId);

            
        } else {
            console.error('businessId is undefined or null');
        }
        navigate('/BankInfo');
      } else {
        console.error('Person creation failed or person_id not found in response');
      }
    } catch (error) {
      console.error('Error creating person:', error);
    }
  };
  return (
    <div className="container">
       <NavBar />
      <form onSubmit={handleSubmit}>
        <h1>Step 2: Business Owner Information</h1>
        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          placeholder="First"
          required
        />
        <input
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
         <input
          type="text"
          name="contact_email"
          value={formData.contact_email}
          onChange={handleChange}
          placeholder="example@gmail.com"
          required
        />
         <input
          type="text"
          name="contact_phone"
          value={formData.contact_phone}
          onChange={handleChange}
          placeholder="Phone number"
          required
        />
        <input
          type="text"
          name="line1"
          value={formData.address.line1}
          onChange={handleChange}
          placeholder="Address Line 1"
          required
        />
        <input
          type="text"
          name="line2"
          value={formData.address.line2}
          onChange={handleChange}
          placeholder="Address Line 2"
          required
        />
        <input
          type="text"
          name="city"
          value={formData.address.city}
          onChange={handleChange}
          placeholder="City"
          required
        />
        <select
          name="state"
          value={formData.address.state}
          onChange={handleChange}
          className="select"
          required
        >
          <option value="" disabled>Select State</option>
          {US_STATES.map(state => (
            <option key={state.code} value={state.code}>{state.name}</option>
          ))}
        </select>
        <input
          type="text"
          name="postal_code"
          value={formData.address.postal_code}
          onChange={handleChange}
          placeholder="Zip Code"
          required
        />
        <input
          type="text"
          name="country"
          value={formData.address.country}
          onChange={handleChange}
          placeholder="Country"
          required
        />
        <button className="button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PersonFormPage;