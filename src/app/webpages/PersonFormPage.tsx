import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { US_STATES } from '../constants/StateOptions';
import NavBar from './NavBar';
import {createPerson} from '../api/parafinCreatePerson';
import '../../App.css';



const PersonFormPage: React.FC = () => {
  const [formData, setFormData] = React.useState({
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
    {   id: '',
        relationship: {
            is_beneficial_owner: true,
            is_representative: true
        }
    }
    ]
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
    } else if (name === 'business_id') {
      setFormData(prevState => ({
        ...prevState,
        linked_businesses: [
          {
            ...prevState.linked_businesses[0],
            id: value
          }
        ]
      }));
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
    const result = await createPerson(formData);
    if (result.success) {
      navigate('/BankInfo');
    }
  };

  return (
    <div className="container">
       <NavBar />
      <form onSubmit={handleSubmit}>
        <h1>Step 2: Input Personal Information</h1>
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
        <input
          type="text"
          name="business_id"
          value={formData.linked_businesses[0].id}
          onChange={handleChange}
          placeholder="Business ID"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PersonFormPage;