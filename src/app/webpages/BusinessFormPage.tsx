import React, { FC, useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { US_STATES } from '../constants/StateOptions';
import INCORPORATION_TYPE_OPTIONS from '../constants/IncorporationTypeOptions';
import NavBar from './components/NavBar';
import {createBusiness} from '../api/parafinCreateBusiness';
import { BusinessContext } from '../main/BusinessContext';  // Updated import statement
import { userToIdMapping } from '../constants/userMapping';


const BusinessFormPage: FC = () => {
  const businessContext = useContext(BusinessContext);  // Updated useContext statement
  const [formData, setFormData] = useState({
    legal_name: '',
    dba_name: '',
    address: {
      line1: '',
      city: '',
      state: '',
      postal_code: '',
      country: ''
    },
    established_date: '',
    incorporation_state: '',
    incorporation_type: ''
  });
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
        const result = await createBusiness(formData);
        if (result.success && result.data) {
            const businessId = result.data.id;
            console.log("businessId: " + businessId);
            console.log("Business created");

            // Updated logic to set the businessId in the businessContext
            if (businessContext) {
              businessContext.setBusinessId(businessId);
            }

            navigate('/PersonalInfoSubmission')
        } else {
            console.error('Business creation failed or business_id not found in response');
        }
    } catch (error) {
        console.error('Error creating business:', error);
    }
  };


  return (
    <div className="container">
       <NavBar />
      <form onSubmit={handleSubmit}>
        <h1>Step 1: Input Business Information</h1>
        <input
          type="text"
          name="legal_name"
          value={formData.legal_name}
          onChange={handleChange}
          placeholder="Legal Name"
          required
        />
        <input
          type="text"
          name="dba_name"
          value={formData.dba_name}
          onChange={handleChange}
          placeholder="DBA Name"
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
        <input
          type="date"
          name="established_date"
          value={formData.established_date}
          onChange={handleChange}
          placeholder="Established Date"
          required
        />
        <select
          name="incorporation_state"
          value={formData.incorporation_state}
          onChange={handleChange}
          className="select"
          required
        >
          <option value="" disabled>Incorporation State</option>
          {US_STATES.map(state => (
            <option key={state.code} value={state.code}>{state.name}</option>
          ))}
        </select>
        <select
          name="incorporation_type"
          value={formData.incorporation_type}
          onChange={handleChange}
          className="select"
          required
        >
          <option value="" disabled>Incorporation Type</option>
          {INCORPORATION_TYPE_OPTIONS.map(incorporation_type => (
            <option key={incorporation_type.label} value={incorporation_type.value}>{incorporation_type.label}</option>
          ))}
        </select>
       
        <button className="button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BusinessFormPage;