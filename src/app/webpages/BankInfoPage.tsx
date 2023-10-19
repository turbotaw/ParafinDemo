import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import {createBank} from '../api/parafinCreateBank';
import '../../App.css';

const BankInfoPage: React.FC = () => {
const [formData, setFormData] = React.useState({
    business_id: '',
    routing_number: '',
    account_number: { last4: '' },
    currency: '',
});

// Your handleChange function should also be updated to handle nested objects:
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'last4') {
        setFormData(prevState => ({
            ...prevState,
            account_number: { last4: value }
        }));
    } else if (name in formData) {
        setFormData({
            ...formData,
            [name]: value
        });
    }
};
    const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { business_id, routing_number, account_number, currency } = formData;
    const result = await createBank(business_id, routing_number, account_number, currency);
    if (result.success) {
        navigate('/thank-you');
    }
};

  return (
    <div className="container">
      <NavBar />
      <form onSubmit={handleSubmit}>
        <h1>Step 3: Fill Out Bank Information</h1>
        <input
          type="text"
          name="business_id"
          value={formData.business_id}
          onChange={handleChange}
          placeholder="Business ID"
          required
        />
        <input
          type="text"
          name="routing_number"
          value={formData.routing_number}
          onChange={handleChange}
          placeholder="Routing Number"
          required
        />
        <input
          type="text"
          name="last4"
          value={formData.account_number.last4}
          onChange={handleChange}
          placeholder="Account Number (last 4 digits)"
          required
        />
        <input
          type="text"
          name="currency"
          value={formData.currency}
          onChange={handleChange}
          placeholder="USD"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BankInfoPage;