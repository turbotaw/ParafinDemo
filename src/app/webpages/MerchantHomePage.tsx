import React, { useState, useEffect, useContext } from "react";
import NavBar from './components/NavBar';
import { fetchSalesData, fetchCreditOffer } from "../api/businessData";
import './MerchantHomePage.css';
import { useNavigate } from 'react-router-dom';
import FinancingSection from './components/FinancingSection';
import dashboardImage from '../img/dashboard.png';
import { useToken } from '../api/useToken'; 
import UserContext from '../main/UserContext';
import { offerMapping } from '../constants/userMapping';

interface SalesDataType {
    totalSales: number;
    transactions: number;
}

interface CreditOfferType {
    offer: string;
}
function mapOfferStatus(offer: string | null): "no-offer" | "has-offer" | "offer-accepted" {
    switch (offer) {
        case "no-offer":
            return "no-offer";
        case "has-offer":
            return "has-offer";
        case "offer-accepted":
            return "offer-accepted";
        default:
            return "no-offer"; 
    }
}
const MerchantHomePage: React.FC = () => {
    const [salesData, setSalesData] = useState<SalesDataType | null>(null);
    const [creditOffer, setCreditOffer] = useState<CreditOfferType | null>(null);
    const token = useToken();
    const userContext = useContext(UserContext);
    const navigate = useNavigate(); 

    let userId: string | null = null;

    if (userContext) {
        userId = userContext.userId;
    } else {
        console.error('UserContext is undefined');
    }

    const handleOnClick = () => {
        navigate('/BusinessSubmission');
    }

    useEffect(() => {
        if (userId !== undefined && userId !== null) {
            // Fetch sales data
            fetchSalesData(userId)
                .then(data => {
                    setSalesData(data);
                    console.log('Fetched Sales Data:', data);
                })
                .catch(error => console.error('Error fetching sales data:', error));
            
            // Fetch credit offer
            fetchCreditOffer(userId)
                .then(offer => {
                    setCreditOffer(offer);
                    console.log('Fetched Credit Offer:', offer);
                })
                .catch(error => console.error('Error fetching credit offer:', error));
        }
    }, [userId]);

    if (!userContext) return null; 

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
                <FinancingSection userStatus={mapOfferStatus(creditOffer)} />
            </div>
        </>
    );
}

export default MerchantHomePage;