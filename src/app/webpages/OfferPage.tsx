import { ParafinElements } from "@parafin/react-parafin-elements";
import { redeemAuthToken } from '../api/tokenManager';
import React, { useState, useEffect } from "react";
import { createOffer } from '../api/parafinCreateOffer';
import {fundProject} from '../api/parafinFundProject';
import NavBar from './components/NavBar';
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
                const result = await createOffer("business_f2d607d5-bc1b-4e18-9289-34c9fb5d896f", "flex_loan");
            } catch (error) {
                console.error('Error fetching token: ', error);
            }
        }
        //offerCreate();
        

        async function sendFunds() {
            try {
                const result = await fundProject("business_f2d607d5-bc1b-4e18-9289-34c9fb5d896f");
            } catch (error) {
                console.error('Error fetching token: ', error);
            }
        }
        sendFunds();
        fetchToken();
       
    }, []);

    return (
        <div className="parafin-container">
             <NavBar />
            {token ? (
                <div className="parafin-element">
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