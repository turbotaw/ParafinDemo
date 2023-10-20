import React, { FC, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import { createBank } from '../api/parafinCreateBank';
import '../main/App.css';
import { BusinessContext } from '../main/BusinessContext'; 

const BankInfoPage: React.FC = () => {
    const [formData, setFormData] = useState({
        business_id: '',
        routing_number: '',
        account_number: { last4: '' },
        currency: '',
    });

    const businessContext = useContext(BusinessContext); 

    useEffect(() => {
        const businessId = businessContext?.businessId;
        console.log("businessId: " + businessId);
        if (businessId) {
            setFormData(prevState => ({
                ...prevState,
                business_id: businessId,
            }));
        }
    }, [businessContext?.businessId]);

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
            console.log("Bank account successfully added");
            navigate('/thank-you');
        } else {
            console.log("Error creating bank account");
        }
    };

    return (
        <div className="container">
            <NavBar />
            <form onSubmit={handleSubmit}>
                <h1>Step 3: Fill Out Bank Information</h1>
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
                <button className="button" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default BankInfoPage;