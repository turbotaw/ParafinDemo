import React, { useState, useEffect } from "react";
import NavBar from './NavBar';
import './MerchantHomePage.css';

function MerchantHomePage() {
  // Manually set initial state values for testing
  const [salesData, setSalesData] = useState({ totalSales: 100000, transactions: 45 });
  const [creditOffer, setCreditOffer] = useState({ amount: 100000, interestRate: 6 });

  useEffect(() => {
    // Fetch sales data when component mounts
    // fetchSalesData().then(data => setSalesData(data));
    // Fetch credit offer when component mounts
    // fetchCreditOffer().then(offer => setCreditOffer(offer));
  }, []);

  return (
    <><div className="navbar">
          <NavBar />
      </div><div className="merchant-home-page">
              {salesData ? (
                  <div className="sales-summary">
                      <h2>Monthly Sales</h2>
                      <p>Total Sales: ${salesData.totalSales.toLocaleString()}</p>
                      <p>Number of Transactions: {salesData.transactions}</p>
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