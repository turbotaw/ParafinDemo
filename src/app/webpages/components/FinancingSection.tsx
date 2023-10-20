import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import financingImage from '../../img/Access_financing.webp';
import './FinancingSection.css';
import { businessIdMapping, offerMapping } from '../../constants/userMapping';
import { createOffer } from '../../api/parafinCreateOffer';
import { UserContext } from '../../main/UserContext'; 
import { useCreditOffer } from '../../api/useCreditOffer';

interface FinancingSectionProps {
    userStatus: 'no-offer' | 'has-offer' | 'offer-accepted' | 'funded'; 
}

const FinancingSection: React.FC<FinancingSectionProps> = ({ userStatus }) => { 
    const navigate = useNavigate(); 
    const userContext = useContext(UserContext);
    const userId = userContext?.userId ?? null;
    const creditOffer = useCreditOffer(userId);

    console.log("userStatus: " + userStatus);

    const handleGetOffer = async () => {
        if (userStatus === 'no-offer' && userId) {
            const businessId = businessIdMapping.get(userId);
            if (!businessId) {
                navigate('/BusinessSubmission');
            } else {
                navigate('/OfferPage');
            }
        } else if (userStatus === 'has-offer' || userStatus === 'offer-accepted' || userStatus === 'funded' || userStatus === 'no-offer') {
            navigate('/OfferPage');
        }
    };

    const getButtonLabel = () => {
        switch (userStatus) {
            case 'no-offer':
                return 'Get financing now';
            case 'has-offer':
                return 'View your offers';
            case 'offer-accepted':
                return 'View your accepted offer';
            case 'funded':
                return 'See loan info';
            default:
                return 'Get financing now';
        }
    };

    const getHeaderText = () => {
        switch (userStatus) {
            case 'no-offer':
                return 'Access financing';
            case 'has-offer':
                return 'Congrats! Your business is pre-approved for a loan';
            case 'offer-accepted':
                return 'Your financing offer was accepted!';
            case 'funded':
                return 'Click here to see more information about your current balance';
            default:
                return 'Access financing';
            
         
        }
    };
    console.log(userStatus);
    const getParagraphText = () => {
        switch (userStatus) {
            case 'no-offer':
                return 'Take your business to the next level by expanding with GrubDash Capital. Easy, accessible financing can help eligible merchants invest in new equipment, open a new location, hire more employees, and much more.';
            case 'has-offer':
                return 'Check out the financing offer available to you through GrubDash Capital and take the next step in growing your business.';
            case 'offer-accepted':
                return 'Congratulations on your accepted offer! You can view the status of your financing agreement anytime.';
            case 'funded':
                return 'Check on important information regarding your loan with GrubDash Capital';  
            default:
                return 'Take your business to the next level by expanding with GrubDash Capital. Easy, accessible financing can help eligible merchants invest in new equipment, open a new location, hire more employees, and much more.';
        }
    };

    return (
        <div className="financing-container">
            <div className="text-section">
                <h2>{getHeaderText()}</h2>
                <p>{getParagraphText()}</p>
                <button onClick={handleGetOffer} className="button">{getButtonLabel()}</button>
            </div>
            <img src={financingImage} alt="Description" className="financing-image" />
        </div>
    );
}

export default FinancingSection;