import React, { useState, useEffect } from "react";
import NavBar from './NavBar';
import { fetchSalesData, fetchCreditOffer } from "../api/businessData";
import './MerchantHomePage.css';


function MerchantHomePage() {
  // Manually set initial state values for testing
  const [salesData, setSalesData] = useState(null);
  const [creditOffer, setCreditOffer] = useState(null);

  useEffect(() => {
    
    // Fetch sales data when component mounts
   
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
                      <h2>Credit Line Offer</h2>
                      <p>Offer Amount: ${creditOffer.amount.toLocaleString()}</p>
                      <p>Interest Rate: {creditOffer.interestRate}%</p>
                      <button>Accept Offer</button>
                  </div>
              ) : (
                  <p>Loading credit offer...</p>
              )}
          </div></>
  );
}

export default MerchantHomePage;