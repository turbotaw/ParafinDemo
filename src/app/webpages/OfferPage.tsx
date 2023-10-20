import { useToken } from '../api/useToken'; 
import { ParafinElements } from "@parafin/react-parafin-elements";
import React, { useEffect, useContext } from "react";
import { createOffer } from '../api/parafinCreateOffer';
import { fundProject } from '../api/parafinFundProject';
import NavBar from './components/NavBar';
import { UserContext } from '../main/UserContext'; 
import './css/OfferPage.css';

const OfferPage: React.FC = () => {  
    const token = useToken(); 
    const userContext = useContext(UserContext);

    useEffect(() => {
        const userId = userContext?.userId;
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