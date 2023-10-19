import React, { useState, useEffect } from "react";
import NavBar from './NavBar';
import { fetchSalesData, fetchCreditOffer } from "../api/businessData";
import './MerchantHomePage.css';
import { useNavigate } from 'react-router-dom';

interface SalesDataType {
    totalSales: number;
    transactions: number;
}

interface CreditOfferType {
    amount: number;
    interestRate: number;
}

function MerchantHomePage() {
    const [salesData, setSalesData] = useState<SalesDataType | null>(null);
    const [creditOffer, setCreditOffer] = useState<CreditOfferType | null>(null);
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate('/BusinessSubmission');
    }
    useEffect(() => {
        fetchSalesData('5678').then(data => {
            setSalesData(data);
            fetchCreditOffer(data).then(offer => setCreditOffer(offer));;
        });

    }, []);

    return (
        <><div className="navbar">
            <NavBar />
        </div><div className="merchant-home-page">
                {salesData ? (
                    <div className="sales-summary">
                        <h2>Monthly Sales</h2>
                        <p>Total Sales: ${salesData.totalSales.toLocaleString()}</p>
                        <p>Number of Transactions: {salesData.transactions.toLocaleString()}</p>
                    </div>
                ) : (
                    <p>Loading sales data...</p>
                )}

                {creditOffer ? (
                    <div className="credit-offer">
                        <h2>Potential Credit Line Offer</h2>
                        <p>Offer Amount: ${creditOffer.amount.toLocaleString()}</p>
                        <p>Interest Rate: {creditOffer.interestRate}%</p>
                        <button onClick={handleOnClick} className="button">Click Here to get a Quote</button>
                    </div>
                ) : (
                    <p>Loading credit offer...</p>
                )}
            </div></>
    );
}

export default MerchantHomePage;