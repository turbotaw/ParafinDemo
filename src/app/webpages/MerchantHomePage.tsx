import React, { useState, useEffect } from "react";
import NavBar from './components/NavBar';
import { fetchSalesData, fetchCreditOffer } from "../api/businessData";
import './MerchantHomePage.css';
import { useNavigate } from 'react-router-dom';
import FinancingSection from './components/FinancingSection';
import dashboardImage from '../img/dashboard.png';

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
                        <p>Total Sales: ${salesData.totalSales.toLocaleString()} | Transactions: {salesData.transactions.toLocaleString()}</p>
                        <p></p>
                    </div>
                ) : (
                    <p>Loading sales data...</p>
                )}

                <div className="dashboard">
                    <img src={dashboardImage} alt="Dashboard" />
                </div>

            </div><div>
                <FinancingSection />
            </div></>
    );
}

export default MerchantHomePage;