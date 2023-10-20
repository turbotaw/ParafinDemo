import React, { useState, useEffect, useContext } from "react";
import NavBar from './components/NavBar';
import { fetchSalesData, fetchCreditOffer } from "../api/businessData";
import './MerchantHomePage.css';
import { useNavigate } from 'react-router-dom';
import FinancingSection from './components/FinancingSection';
import dashboardImage from '../img/dashboard.png';
import { useToken } from '../api/useToken';  // Adjust the path to match your file structure
import UserContext from '../main/UserContext';
import { offerMapping } from '../constants/userMapping';

interface SalesDataType {
    totalSales: number;
    transactions: number;
}

interface CreditOfferType {
    amount: number;
    interestRate: number;
}

const MerchantHomePage: React.FC = () => {
    const [salesData, setSalesData] = useState<SalesDataType | null>(null);
    const [creditOffer, setCreditOffer] = useState<CreditOfferType | null>(null);
    const token = useToken();
    const userContext = useContext(UserContext);
    const navigate = useNavigate();  // Moved up

    let userId: string | null = null;

    if (userContext) {
        userId = userContext.userId;
    } else {
        console.error('UserContext is undefined');
        // return null;  // Removed to avoid conditional hook usage
    }

    const handleOnClick = () => {
        navigate('/BusinessSubmission');
    }

    useEffect(() => {
        if (userId !== undefined && userId !== null) {
            fetchSalesData(userId)
                .then(data => {
                    setSalesData(data);
                    return fetchCreditOffer(data);
                })
                .then(offer => setCreditOffer(offer))
                .catch(error => console.error('Error fetching data:', error));
        }
    }, [userId]);

    if (!userContext) return null;  // Moved down

    return (
        <>
            <div className="navbar">
                <NavBar />
            </div>
            <div className="merchant-home-page">
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

            </div>
            <div>
                <FinancingSection />
            </div>
        </>
    );
}

export default MerchantHomePage;