import { ParafinElements } from "@parafin/react-parafin-elements";
import { redeemAuthToken } from '../api/tokenManager';
import React, { useState, useEffect } from "react";
import { createOffer } from '../api/parafinCreateOffer';
import NavBar from './NavBar';
import './OfferPage.css';

function OfferPage() {
    const [token, setToken] = useState(null)
    const [state, setState] = useState(null)

    useEffect(() => {
        async function fetchToken() {
            try {
                const result = await redeemAuthToken("person_ef089a78-a4db-4e43-b644-ed8434f6092b");
                if(result !== undefined){
                    setToken(result.bearer_token);
                }
            } catch (error) {
                console.error('Error fetching token: ', error);
            }
        }

        async function offerCreate() {
            try {
                const result = await createOffer("business_39419781-cfdd-48fc-a1b1-57c93651835c", "flex_loan");
            } catch (error) {
                console.error('Error fetching token: ', error);
            }
        }
        offerCreate();
        fetchToken();
       
    }, []);

    return (
        <div className="parafin-container">
             <NavBar />
            <h1>Parafin Elements Quickstart</h1>
            {token ? (
                <div className="parafin-elements-wrapper">
                    <ParafinElements
                        product="capital"
                        environment="production"
                        token={token}
                    />
                </div>
            ) : (
                <div>
                    loading...
                </div>
            )}
        </div>
    );
}

export default OfferPage;