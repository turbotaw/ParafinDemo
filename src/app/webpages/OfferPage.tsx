import { useToken } from '../api/useToken';  // Adjust the path to match your file structure
import { ParafinElements } from "@parafin/react-parafin-elements";
import React, { useEffect, useContext } from "react";
import { createOffer } from '../api/parafinCreateOffer';
import {fundProject} from '../api/parafinFundProject';
import NavBar from './components/NavBar';
import UserContext from '../main/UserContext';
import {businessIdMapping} from '../constants/userMapping';
import './OfferPage.css';

function OfferPage() {
    const token = useToken();  // Get the token using the useToken hook
    const userContext = useContext(UserContext);
    
    useEffect(() => {
        if (!userContext) {
            console.error('UserContext is undefined');
            return;
        }
        
        const { userId } = userContext;
        
        async function offerCreate() { 
            let businessId;  
            if (userId !== undefined && userId !== null) {
                businessId = businessIdMapping.get(userId);
                if (businessId !== undefined) { 
                    try {
                        const result = await createOffer(businessId, "flex_loan");
                    } catch (error) {
                        console.error('Error creating offer: ', error);
                    }
                } else {
                    console.error('businessId is undefined for userId: ', userId);
                }
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
       // sendFunds();
       
    }, [userContext]);

    return (
        <div className="parafin-container">
            <NavBar />
            {token ? (
                <div className="parafin-element">
                    <ParafinElements
                        key={token}
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