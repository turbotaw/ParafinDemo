import React, { useState, useEffect, useContext } from "react";
import NavBar from './components/NavBar';
import { fetchSalesData, fetchCreditOffer } from "../api/businessData";
import './css/MerchantHomePage.css';
import { useNavigate } from 'react-router-dom';
import FinancingSection from './components/FinancingSection';
import dashboardImage from '../img/dashboard.png';
import { useToken } from '../api/useToken'; 
import { UserContext } from '../main/UserContext';  // Updated import statement
import { offerMapping } from '../constants/userMapping';
import {useCreditOffer} from '../api/useCreditOffer';

interface SalesDataType {
    totalSales: number;
    transactions: number;
}

interface CreditOfferType {
    offer: string;
}

function mapOfferStatus(offer: string | null | undefined): "no-offer" | "has-offer" | "offer-accepted" | "funded" {
    switch (offer) {
        case "no-offer":
            return "no-offer";
        case "has-offer":
            return "has-offer";
        case "offer-accepted":
            return "offer-accepted";
        case "funded":
            return "funded";
        default:
            return "no-offer"; 
    }
}

const MerchantHomePage: React.FC = () => {
    const userContext = useContext(UserContext);
    const userId = userContext?.userId;
    const [creditOffer, setCreditOffer] = useState<CreditOfferType | null>(null);
    const [salesData, setSalesData] = useState<SalesDataType | null>(null);
    const token = useToken();
  
    const navigate = useNavigate(); 

    const handleOnClick = () => {
        navigate('/BusinessSubmission');
    }

    useEffect(() => {
        if (userId !== undefined && userId !== null) {
           
            fetchSalesData(userId)
                .then(data => {
                    setSalesData(data);
                    console.log('Fetched Sales Data:', data);
                })
                .catch(error => console.error('Error fetching sales data:', error));
            
           
            fetchCreditOffer(userId)
    .then(offer => {
        console.log(offer); 
        console.log(mapOfferStatus(offer));
        setCreditOffer({ offer: offer }); 
        console.log('Fetched Credit Offer:', offer);
    })
    .catch(error => console.error('Error fetching credit offer:', error));
    }
}, [userId]);
    console.log('creditOffer?.offer:', creditOffer?.offer);
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
            <FinancingSection userStatus={mapOfferStatus(creditOffer?.offer || null)} /> 
            </div>
        </>
    );
}

export default MerchantHomePage;